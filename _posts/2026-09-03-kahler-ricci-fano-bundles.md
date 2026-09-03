---
layout: paper
title: "Finite-Time Singularities of the Kähler--Ricci Flow on Fano Bundles"
title_ja: "Fano束上のKähler--Ricci流の有限時間特異点"
authors: "Wangjian Jian, Jian Song"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  We study collapsing finite-time singularities of the unnormalized Kähler--Ricci flow on Fano bundles arising in the analytic minimal model program. For a Fano bundle $X^n\rightarrow Y^m$, we prove a maximal splitting theorem by the Kähler-Ricci flow that every tangent space at a fixed limiting point splits globally as $({\mathbb C}^m,g_{\rm E},J_0)\times(Z',d',J')$. If the fibre has complex dimension one, we prove a global Type-I bound for the full curvature tensor and show that the ambient and intrinsic diameters of every fibre are uniformly comparable to $\sqrt{T-t}$. Furthermore, every tangent flow at any fixed limiting point is the round shrinking cylinder ${\mathbb C}^m\times{\mathbb P}^1$.
topic: differential-geometry
tags:
  - kahler-ricci-flow-solitons
  - fano-varieties
  - metric-limits
  - singularities
arxiv_id: "2609.02878v1"
arxiv_url: "https://arxiv.org/abs/2609.02878"
arxiv_submitted: "2026-09-02"
arxiv_updated: "2026-09-02"
summary: >-
  解析的極小モデル・プログラムに現れるFano束の崩壊について、固定極限点の接空間が底空間方向のEuclid因子を大域的に分離することを示す。相対次元1では曲率のType-I評価、各ファイバーの直径の正確な崩壊率、接流が丸い縮小円柱になることまで決定する。
abstract_en: >-
  We study collapsing finite-time singularities of the unnormalized Kähler--Ricci flow on Fano bundles arising in the analytic minimal model program. For a Fano bundle $X^n\rightarrow Y^m$, we prove a maximal splitting theorem by the Kähler-Ricci flow that every tangent space at a fixed limiting point splits globally as $({\mathbb C}^m,g_{\rm E},J_0)\times(Z',d',J')$. If the fibre has complex dimension one, we prove a global Type-I bound for the full curvature tensor and show that the ambient and intrinsic diameters of every fibre are uniformly comparable to $\sqrt{T-t}$. Furthermore, every tangent flow at any fixed limiting point is the round shrinking cylinder ${\mathbb C}^m\times{\mathbb P}^1$.
summary_en: ""
abstract_ja: >-
  解析的極小モデル・プログラムから生じるFano束上の非正規化Kähler--Ricci流について、崩壊する有限時間特異点を調べる。固定極限点の各接空間は底空間と同じ次元のEuclid因子を大域的に分離する。ファイバーが複素1次元ならば全曲率テンソルの大域的Type-I評価が成り立ち、ファイバーの内在的・外在的直径はいずれも $\sqrt{T-t}$ と同程度である。さらにすべての接流は丸い縮小円柱となる。
abstract_source_url: "https://arxiv.org/abs/2609.02878"
license_name: "CC0 1.0 Universal"
license_url: "https://creativecommons.org/publicdomain/zero/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.02878](https://arxiv.org/abs/2609.02878)
- **著者:** Wangjian Jian, Jian Song
- **初回投稿日:** 2026年9月2日
- **最終更新日:** 2026年9月2日
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)

## 要約

Kähler--Ricci流が有限時間でFanoファイバーを潰す状況は、解析的極小モデル・プログラムの中間的な収縮モデルである。底空間の複素次元を $m$、全空間の複素次元を $n$ とすると、本論文は $0<m<n$ の崩壊を扱う。

任意の固定極限点でType-Iスケールに拡大した接空間は、底空間方向に由来する $\mathbb C^m$ を失わず、大域的かつ正則等長に分裂する。残余因子はklt特異点を持つ正規解析空間である。

ファイバーが $\mathbb P^1$ の場合には、全曲率テンソルのType-I上界とファイバー直径の上下評価を証明する。その結果、接流はEuclid空間と丸い縮小2球面の積に一意的に分類される。

## 背景と問題設定

非正規化流 $\partial_t\omega=-\operatorname{Ric}(\omega)$ が有限時刻 $T$ で退化し、極限Kähler類が射影 $\pi:X^n\to Y^m$ 上のKähler類の引き戻しになる場合を考える。ファイバーの体積は潰れるが、曲率がどの速度で発散し、拡大極限がどの幾何を持つかは自明ではない。

## 主結果

### 最大階数分裂（Theorem 1.1）

$\pi:X^n\to Y^m$ を射影多様体間のZariski局所自明なFano束とし、極限類が底空間のKähler類の引き戻しであるとする。底の点 $q$ に基づく固定極限点のすべての接空間は、完全Kähler--Ricci shrinkerとして

$$
(Z,d,J)\simeq(\mathbb C^m,g_{\mathrm E},J_0)\times(Z',d',J')
$$

と大域的に正則等長分裂する。$Z'$ はklt特異点を持つ正規解析空間である。

### 相対次元1のType-I評価（Theorem 1.2）

$\pi:X\to Y$ が $\mathbb P^1$ 束ならば、定数 $0<c<C$ が存在し、すべての $0\leq t<T$ と $q\in Y$ に対して

$$
\sup_X (T-t)|\operatorname{Rm}(g(t))|_{g(t)}\leq C,
$$

$$
c\sqrt{T-t}\leq\operatorname{diam}_{X,g(t)}X_q
\leq\operatorname{diam}_{X_q,g(t)|_{X_q}}X_q\leq C\sqrt{T-t}
$$

が成り立つ。

### 接流の分類（Corollary 1.1）

相対次元1では、測度を忘れた接流はすべて

$$
(\mathbb C^m\times\mathbb P^1,\ g_{\mathrm E}+(-s)g_{S^2})_{s<0},
\qquad \operatorname{Ric}(g_{S^2})=\tfrac12g_{S^2}
$$

という丸い縮小円柱である。

## 証明の見取り図

接空間上のFriedrichs drift作用素に鋭い半スペクトル・ギャップを示し、拡大した底空間座標の微分が平行になることからEuclid因子を得る。水平評価が底方向の階数消失を防ぎ、Zariski局所自明化の有限被覆が分裂を大域化する。相対次元1では残余正規曲線を分類し、packingとexact-levelの議論でGaussian型を排除する。最後に二尺度背理法により固定ファイバー評価を大域的Type-I曲率評価へ昇格させる。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.02878](https://arxiv.org/abs/2609.02878)
- **Introduction:** Section 1, pp. 2–5
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.2; Corollary 1.1
- **論文構成の説明:** Introduction, p. 5
- **確認したarXivバージョン:** v1
- **確認したライセンス:** CC0 1.0 Universal
- **source_scope:** Abstract and Introduction
