---
layout: paper
title: "Some uniform estimates for Kähler--Ricci Shrinkers"
title_ja: "Kähler–Ricci縮小解に対する一様評価"
authors: "Junsheng Zhang"

arxiv_primary_category: "math.DG"
arxiv_categories:
  - math.DG
arxiv_abstract: >-
  In this paper, we establish several uniform estimates for Kähler--Ricci shrinkers without imposing any curvature assumptions. In particular, we prove: 1. a uniform lower bound for the entropy; 2. a uniform lower bound for the asymptotic volume ratio of Kähler--shrinkers with maximal volume growth; 3. a uniform lower bound for the scalar curvature on balls centered at a minimum point of the soliton potential for non-Gaussian shrinkers.
topic: differential-geometry
tags:
  - kahler-ricci-flow-solitons
  - curvature
  - noncompact-kahler-geometry
  - metric-limits
  - fano-varieties
arxiv_id: "2608.30779v1"
arxiv_url: "https://arxiv.org/abs/2608.30779"
arxiv_submitted: "2026-08-31"
arxiv_updated: "2026-08-31"
summary: >-
  曲率仮定を置かず、固定複素次元の滑らかなKähler–Ricci縮小解に対するエントロピーの一様下界を与える。これから弱コンパクト性を導き、最大体積成長の場合の漸近体積比と非Gaussianの場合の局所スカラー曲率にも次元だけに依存する正の下界を得る。
abstract_en: ""
summary_en: >-
  The paper derives dimension-dependent estimates for complete shrinking Kähler–Ricci solitons without assuming curvature bounds. An algebraic description of weighted volume gives an explicit entropy lower bound and hence weak precompactness. The dimension of the affine base is stable under convergence, leading to volume-growth estimates. Further arguments yield a scalar-curvature gap for every non-Gaussian shrinker and an asymptotic-conicality criterion.
abstract_ja: >-
  曲率仮定なしにKähler–Ricci縮小解の複数の一様評価を確立する。特に、エントロピーの一様下界、最大体積成長をもつ縮小解の漸近体積比の一様下界、非Gaussian縮小解についてソリトンポテンシャルの最小点を中心とする球上のスカラー曲率の一様下界を示す。
abstract_source_url: "https://arxiv.org/abs/2608.30779"
license_name: "arXiv non-exclusive distribution license"
license_url: "https://arxiv.org/licenses/nonexclusive-distrib/1.0/"
article_mode: "Abstract・Introductionに基づく日本語要約"
source_scope: "Abstract and Introduction"
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2608.30779](https://arxiv.org/abs/2608.30779)
- **著者:** Junsheng Zhang
- **初回投稿日:** 2026-08-31
- **最終更新日:** 2026-08-31
- **主分類・副分類:** math.DG（主分類）
- **ライセンス:** [arXiv non-exclusive distribution license](https://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

Kähler–Ricci縮小解はKähler–Ricci流の有限時間特異点モデルである。Introductionでは

$$
\operatorname{Ric}(\omega)+\sqrt{-1}\partial\bar\partial f=\omega,
\qquad \Delta_\omega f+f-|\nabla^{1,0}f|^2=0
$$

と正規化し、重み付き体積 $W(\xi)=e^{\mu(g)+n}$ を用いる。

本論文は曲率の事前仮定なしに、固定次元の全ての滑らかな縮小解へ一様なエントロピー下界を与える。これにより特異極限を許す弱コンパクト性が得られ、極限の偏極Fanoファイブレーションのアフィン底の次元が保存される。

さらに最大体積成長の場合の漸近体積比に正の一様下界を与え、非Gaussian縮小解にはポテンシャル最小点近傍でスカラー曲率が一様に正となるギャップを示す。

## 背景と問題設定

各縮小解が偏極Fanoファイブレーションをもつという先行結果により、非コンパクトな解析対象へ代数的な重み付き体積を対応させられる。本論文の課題は、この構造から次元だけに依存する評価を引き出し、縮小解のモジュライと極限を制御することである。

## 主結果

### 重み付き体積とエントロピー（Theorem 0.1）

複素次元 $n$ の滑らかなKähler–Ricci縮小解に対し、明示的な次元定数 $N_n$ を用いて

$$
W(\xi)\geq\frac{1}{N_n^n n!}
$$

が成り立つ。同値にPerelmanの $\mu$ エントロピーは次元だけで下から抑えられる。

### 極限での成長次数保存（Theorem 0.2）

収束する縮小解列に付随するFanoファイブレーション $\pi_i:X_i\to Y_i$ では、十分大きい $i$ に対して $\dim_\mathbb C Y_i=\dim_\mathbb C Y_\infty$ となる。したがって体積成長次数ごとの成分は完備化後も交わらない。

### 体積比と曲率のギャップ（Theorems 0.3, 0.7）

最大体積成長なら

$$
\lim_{r\to\infty}\frac{\operatorname{Vol}B(p,r)}{r^{2n}}\geq\delta_n>0
$$

である。また非Gaussian縮小解には $\varepsilon_n>0$ が存在し、ポテンシャルの最小点 $p$ について $\inf_{B(p,1)}R_\omega\geq\varepsilon_n$ となる。

### スカラー曲率減衰（Theorem 0.8）

非コンパクト縮小解で $R_\omega(x)\to0$ が無限遠で成り立つなら、その計量は漸近錐的である。

## 証明の見取り図

偏極Fanoファイブレーション上の相対的非常豊富性と重み付き体積の代数的表示から一様下界を得て、Li–Li–Wangのコンパクト性定理へ接続する。極限上の正則関数を近似列へ持ち上げ、アフィン底の次元が飛ばないことを示す。体積成長には非コンパクトDuistermaat–Heckman局所化を用い、曲率ギャップにはpluri-anticanonical切断のHörmander持上げと錐の孤立性を組み合わせる。

## 原論文との対応

- **Abstractページ:** [arXiv:2608.30779](https://arxiv.org/abs/2608.30779)
- **Introduction:** Introduction, pp. 1–4
- **Introduction中で言及された主要定理番号:** 本文の主結果各小節に記載
- **確認したarXivバージョン:** v1
- **確認したライセンス:** arXiv non-exclusive distribution license
- **source_scope:** Abstract and Introduction
