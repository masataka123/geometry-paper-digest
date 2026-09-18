---
layout: paper
title: "Finite-Time Singularities of the Kähler--Ricci Flow on Fano Bundles II"
title_ja: "Fano束上のKähler--Ricci流の有限時間特異点 II"
authors: "Wangjian Jian, Jian Song"
arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
  - math.AP
arxiv_abstract: >-
  The analytic minimal model program proposed in \cite{SongTianSingularities, JST} seeks to describe the birational transitions and fibre collapsing of the Kähler--Ricci flow through the geometry of its singularities. A fundamental conjecture of \cite{JST} predicts Type I bounds for the scalar curvature and diameter of every fibre contratced by the limiting cohomological class at the finite singular time. This paper is a continuation of \cite{Splitting} that establishes the Type I conjecture for collapsing solutions on Fano bundles with arbitrary smooth Fano fibres. If the fibre admits a smooth Kähler-Einstein metric, the Type I bound holds for the full curvature tensor.
topic: differential-geometry
tags:
  - kahler-ricci-flow-solitons
  - fano-varieties
  - kahler-einstein-metrics
  - curvature
  - metric-limits
arxiv_id: "2609.20513v1"
arxiv_url: "https://arxiv.org/abs/2609.20513"
arxiv_submitted: "2026-09-17"
arxiv_updated: "2026-09-17"
summary: >-
  Fano束を潰す非正規化Kähler--Ricci流について、有限特異時刻で全ファイバーのスカラー曲率と直径がType I尺度で制御されることを示す。ファイバーが滑らかなKähler–Einstein計量をもつ場合には全曲率のType I評価と、放物型拡大極限が $\mathbb C^m\times F$ になることまで証明する。
abstract_en: >-
  The analytic minimal model program proposed in \cite{SongTianSingularities, JST} seeks to describe the birational transitions and fibre collapsing of the Kähler--Ricci flow through the geometry of its singularities. A fundamental conjecture of \cite{JST} predicts Type I bounds for the scalar curvature and diameter of every fibre contratced by the limiting cohomological class at the finite singular time. This paper is a continuation of \cite{Splitting} that establishes the Type I conjecture for collapsing solutions on Fano bundles with arbitrary smooth Fano fibres. If the fibre admits a smooth Kähler-Einstein metric, the Type I bound holds for the full curvature tensor.
summary_en: ""
abstract_ja: >-
  解析的極小モデル・プログラムは、Kähler--Ricci流の特異点から双有理変換とFanoファイブレーションの崩壊を記述しようとする。本論文はFano束上の崩壊解に対し、任意の滑らかなFanoファイバーについてスカラー曲率とファイバー直径のType I予想を証明する。さらにファイバーが滑らかなKähler–Einstein計量を許容すれば、全曲率テンソルにもType I評価が成り立つ。
abstract_source_url: "https://arxiv.org/abs/2609.20513"
license_name: "Creative Commons CC0 1.0 Universal"
license_url: "https://creativecommons.org/publicdomain/zero/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.20513](https://arxiv.org/abs/2609.20513)
- **著者:** Wangjian Jian, Jian Song
- **初回投稿日・最終更新日:** 2026年9月17日
- **主分類・副分類:** math.DG（主分類）, math.AP
- **ライセンス:** [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/)

## 要約

射影多様体 $X$ 上の非正規化Kähler--Ricci流を有限特異時刻 $T$ まで考える。極限コホモロジー類が定める写像 $\Phi:X\to Y$ は、解析的極小モデル・プログラムにおいて潰れる方向を表すが、潰れる速さや特異時刻近傍の曲率をそれだけでは決めない。

論文は $\Phi$ が滑らかなFano多様体 $F$ を共通ファイバーにもつFano束である場合を扱う。安定性や初期計量の対称性を仮定せず、スカラー曲率が $(T-t)^{-1}$、全ファイバーの外在的直径が $\sqrt{T-t}$ の尺度で一様に制御されることを示す。

さらに $F$ が滑らかなKähler–Einstein計量を許容する場合、全曲率テンソルにもType I評価を得る。この追加仮定の下ではファイバーの内在的直径に上下評価がつき、任意のType I放物型拡大極限をEuclid因子とFanoファイバーの積として同定する。

新しい点は、既存のRicci potentialの局所化とRicci vertex近傍の解析評価を、束のすべてのファイバーで一様に利用できるようにすることである。一般のFanoファイバーに対するスカラー曲率・直径評価と、Kähler–Einsteinファイバーに対する全曲率・極限同定とを明確に分けている。

## 背景と問題設定

流は

$$
\partial_t\omega(t)=-\operatorname{Ric}(\omega(t)),\qquad \omega(0)=\omega_0,qquad 0\leq t<T
$$

であり、$[\omega_0]\in H^2(X,\mathbb Q)\cap H^{1,1}(X,\mathbb R)$ を仮定する。半ampleな極限類は連結ファイバーをもつ全射 $\Phi:X\to Y$ を定め、本論文では

$$
[\omega_0]-2\pi T c_1(X)=\Phi^*[\omega_Y]
$$

を満たすFano束を対象とする。

## 主結果

### スカラー曲率とファイバー直径（Theorem 1.1）

上の仮定の下で定数 $C>0$ が存在し、すべての $0\leq t<T$ に対して

$$
\sup_X|R_{g(t)}|\leq \frac{C}{T-t},\qquad
\sup_{q\in Y}\operatorname{diam}_{(X,g(t))}F_q\leq C\sqrt{T-t}
$$

が成り立つ。直径は周囲の $X$ の距離で測る。ファイバー $F$ の安定性も初期計量の対称性も要求しない点が重要である。

### 全曲率と拡大極限（Theorem 1.2）

$F$ が滑らかなKähler–Einstein計量 $g_F$ をもつなら、

$$
\sup_X|\operatorname{Rm}(g(t))|_{g(t)}\leq \frac{C}{T-t}
$$

が成り立つ。さらにファイバー上の内在的直径は $\sqrt{T-t}$ と上下から同程度であり、$\tau_i\searrow0$ による任意の拡大列は部分列を取って

$$
(\mathbb C^m\times F,\ g_{\mathrm{Euc}}+(-a)g_F)
$$

へpointed smooth Cheeger–Gromov収束する。

## 証明の見取り図

Introductionが述べる中心手段はRicci potentialとその大域的最小点であるRicci vertexの局所化である。極限base potentialの $C^{1,1}$ 正則性から二次的なwellを作り、指定した各ファイバーからbase距離 $C\sqrt{T-t}$ 以内にvertexを置く。水平評価とファイバー体積恒等式でtubeの体積仮定を検証し、既存のLi–Yau型・Harnack型評価へ接続してTheorem 1.1を得る。後半では相対potential、ファイバーごとのPoincaré不等式、極限測度とentropyの連続性を経てEinstein極限を同定する。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.20513](https://arxiv.org/abs/2609.20513)
- **Introduction:** Section 1
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2; Corollary 1.1
- **論文構成の説明:** Introduction末尾
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC0 1.0
- **source_scope:** Abstract and Introduction
