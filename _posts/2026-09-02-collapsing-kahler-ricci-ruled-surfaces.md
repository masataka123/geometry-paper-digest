---
layout: paper
title: "Finite Time Singularities of Collapsing Kähler Ricci Flow on Ruled Surfaces"
title_ja: "ルールド曲面上の収縮するKähler–Ricci流の有限時間特異点"
authors: "Tongxin Xu, Zhenlei Zhang"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  We prove that any finite time collapsing Kähler Ricci flow on ruled surfaces develops a Type I singularity, such singularity is modeled on the standard product shrinker $\mathbb{P}^1\times \mathbb{C}$. As an application, we obtain the optimal collapse rate of fibers on ruled surfaces.
topic: differential-geometry
tags:
  - kahler-ricci-flow-solitons
  - curvature
  - metric-limits
arxiv_id: "2609.01442v1"
arxiv_url: "https://arxiv.org/abs/2609.01442"
arxiv_submitted: "2026-09-01"
arxiv_updated: "2026-09-01"
summary: >-
  ルールド曲面上で有限時間にファイバー方向が潰れるKähler–Ricci流は、任意の初期計量についてType I特異点を生じることを示す。正則ファイバー上の接流は標準積shinker $\mathbb{P}^1\times\mathbb{C}$ であり、ファイバー直径の最適な $\sqrt{T-t}$ 収縮率も得られる。
abstract_en: ""
summary_en: >-
  The authors study finite-time collapse of the Kähler–Ricci flow along the fibers of ruled surfaces. They establish Type I curvature growth without imposing a symmetry ansatz and identify the tangent-flow model over regular fibers with the standard product shrinker. Their estimates also determine the sharp square-root rate at which the fibers collapse. The argument combines metric-flow compactness, a splitting result, and an exclusion of Type II blow-up.
abstract_ja: >-
  ルールド曲面上の有限時間収縮Kähler–Ricci流がType I特異点を形成し、その特異点が標準積shinker $\mathbb{P}^1\times\mathbb{C}$ によってモデル化されることを証明する。応用として、ルールド曲面のファイバーに対する最適な収縮率を得る。
abstract_source_url: "https://arxiv.org/abs/2609.01442"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2609.01442](https://arxiv.org/abs/2609.01442)
- **著者:** Tongxin Xu, Zhenlei Zhang
- **初回投稿日:** 2026年9月1日
- **最終更新日:** 2026年9月1日
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

有限時刻 $T$ までの非正規化Kähler–Ricci流を考える。極限Kähler類を $\alpha_T=[\omega_0]-Tc_1(M)$ とすると、$\alpha_T^n=0$ は体積収縮を表す。ルールド曲面では、流が基底曲線を残しながら $\mathbb{P}^1$ ファイバーを潰す状況が自然に現れる。

曲率が $C/(T-t)$ 以下で増大するType I性は、特異点を放物型に拡大したときの幾何を制御する基本条件である。対称性を仮定した既知結果に対し、本論文は一般の初期Kähler計量から始めたルールド曲面の収縮がType Iであることを示す。

さらに正則ファイバー上の接流を $\mathbb{P}^1\times\mathbb{C}$ の標準積shinkerと同定する。この剛性から、ファイバー直径が $\sqrt{T-t}$ と同じ次数で潰れるという上下評価が従う。

## 背景と問題設定

Type I特異点では

$$
\sup_M |\operatorname{Rm}(\omega(t))|_{\omega(t)}\leq \frac{C}{T-t}
$$

が成り立つ。コンパクトKähler曲面の有限時間特異点はすべてType Iであるという予想のうち、体積非収縮の場合や有限時間で全体が消滅する場合は既知であった。本論文は、消滅を伴わずファイバーが潰れるルールド曲面の場合を扱う。

## 主結果

### ルールド曲面のType I性（Theorem 1.1）

$p:M_0\to\Sigma$ をコンパクトRiemann面上の $\mathbb{P}^1$ 束とし、有限時間Kähler–Ricci流が

$$
[\omega_0]-Tc_1(M_0)=[p^*\omega_\Sigma]
$$

を満たすならば、時刻 $T$ の特異点はType Iである。

### 正則ファイバー上の曲率評価（Corollary 1.2）

一般の正則 $\mathbb{P}^1$ ファイブレーションで、特異ファイバーの像を $\Delta\subset\Sigma$ とする。任意の $K\Subset\Sigma\setminus\Delta$ に対して

$$
\sup_{p^{-1}(K)}|\operatorname{Rm}_{\omega(t)}|_{\omega(t)}\leq\frac{C_K}{T-t}
$$

が成り立つ。

### 最適収縮率（Corollary 1.3）

同じ仮定の下で、$q\in K$ 上のファイバー $F_q$ の直径は

$$
c_K\sqrt{T-t}\leq \operatorname{diam}(F_q,g(t)|_{F_q})\leq C_K\sqrt{T-t}
$$

を満たす。ルールド曲面では、この評価は全基底上で一様である。

### 接流の同定（Theorem 1.4）

射影束上のType I流を特異時刻のまわりで拡大すると、部分列はpointed $C^\infty$ Cheeger–Gromov位相で標準積shinker $(\mathbb{P}^s\times\mathbb{C}^m,g_{\mathbb{P}^s}\times g_E)$ に収束する。

## 証明の見取り図

Introductionは二段階の方針を述べる。まずBamlerのmetric flow compactnessにより得たorbifold Kähler–Ricci shrinker上に、線形成長をもち微分が消えない大域正則函数を構成する。これによりorbifold特異点を除去し、分裂定理と1次元shinkerの分類から接流を $\mathbb{P}^1\times\mathbb{C}$ と同定する。

次にType IIであると仮定し、高曲率点を動かしながら拡大する。pointed Nash entropyの評価で極限を再び標準円筒に固定し、その中の $\mathbb{P}^1$ を高曲率領域へ埋め込むと距離評価に矛盾する。したがってType I評価が従う。

## 原論文との対応

- **Abstractページ:** [arXiv:2609.01442](https://arxiv.org/abs/2609.01442)
- **Introduction:** Section 1, pp. 1–4
- **Introduction中で言及された主要定理番号:** Theorems 1.1, 1.4; Corollaries 1.2, 1.3
- **論文構成の説明:** Introduction, pp. 3–4
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
