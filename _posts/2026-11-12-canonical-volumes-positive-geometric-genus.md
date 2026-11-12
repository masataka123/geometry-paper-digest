---
layout: paper
title: Canonical Volumes of Threefolds with Positive Geometric Genus
title_ja: 正の幾何種数をもつ三次元多様体の標準体積と等号例
authors: Pinxian Bie, Peien Du, Zhengjie Yu
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We prove that a complex projective threefold of general type with canonical singularities and positive geometric genus has canonical volume at least $1/30$, with strict inequality when its Euler characteristic is positive. We describe the equality cases as canonical hypersurfaces of degree $28$ in $\mathbb P(1,3,4,5,14)$. These canonical models and their smooth projective resolutions are simply connected. Their coarse moduli space is irreducible and rational of dimension $103$, with finite quotient singularities; all admissible $\mathbb Q$-Gorenstein deformations are unobstructed and arise by varying the equation.
topic: algebraic-geometry
tags:
- birational-geometry
- singularities
- moduli
- fundamental-groups
arxiv_id: 2611.14402v1
arxiv_url: https://arxiv.org/abs/2611.14402
arxiv_submitted: '2026-11-10'
arxiv_updated: '2026-11-10'
summary: 幾何種数が正の一般型三次元多様体の標準体積の最小値1/30を示し、等号例の標準環を重み付き超曲面として記述する。等号例の単連結性、変形の非障害性、103次元の有理な粗モジュライ空間まで明らかにする。
abstract_en: ''
summary_en: A sharp volume problem is linked here to a concrete moduli problem. The positive-geometric-genus assumption leaves a difficult case with holomorphic two-forms, which the authors use to rule out volumes below the proposed minimum. At the endpoint they recover a weighted canonical ring and study its geometry. The resulting deformation space is smooth, whereas the coarse moduli space may retain finite quotient singularities.
abstract_ja: canonical特異点を許す複素射影一般型三次元多様体について、正の幾何種数の下で標準体積を1/30以上に抑える。Euler標数が正なら等号は起こらない。等号を達成する標準モデルは重み1,3,4,5,14、次数28の超曲面として認識され、標準モデルとその滑らかな射影的解消はいずれも単連結である。許容されるQ-Gorenstein変形は方程式の変形に由来し、対応する粗モジュライ空間は103次元で既約かつ有理となる。
abstract_source_url: https://arxiv.org/abs/2611.14402
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.14402v1](https://arxiv.org/abs/2611.14402)
- **著者:** Pinxian Bie, Peien Du, Zhengjie Yu
- **初回投稿日:** 2026-11-10
- **最終更新日:** 2026-11-10
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

一般型三次元多様体で幾何種数が正の場合、標準切断が少なくとも一つある。しかし幾何種数一では、低次数の多重標準系が十分な写像を作らない可能性があり、標準体積の鋭い評価には難しさが残る。

本論文は標準体積の下界 $1/30$ を確立し、Euler標数が正ならその値を達成できないことを示す。さらに最小体積を達成する場合を単に数値的に絞るだけでなく、標準環を具体的な重み付き超曲面の環として決定する。

等号例の幾何と変形も対象となる。標準モデルとその解消の単連結性、許容される変形の非障害性、103次元の既約かつ有理な粗モジュライ空間が得られる。変形空間の滑らかさと粗モジュライ空間の滑らかさは同一ではなく、後者には有限商特異点が許される。

## 背景と問題設定

canonical特異点をもつ複素射影一般型三次元多様体 $X$ に対し、$P\_m=h^0(X,\omega\_X^{[m]})$、$p\_g=P\_1$、$\omega\_X^{[m]}=(\omega\_X^{\otimes m})^{\ast\ast}$ とする。

$$
\operatorname{Vol}(X)=\limsup\_{m\to\infty}\frac{6P\_m}{m^3}
$$

であり、terminal極小モデル上では標準因子の三乗である。既知のNoether不等式 $\operatorname{Vol}(X)\ge\frac43p\_g-\frac{10}3$ は $p\_g=1$ で正の下界を与えない。従来、$p\_g=1$ かつ $\chi\le0$ では $1/30$ が知られ、残る正Euler標数の場合には正則二形式が存在する。

## 主結果

### 体積の下界と厳密不等式（Theorem 1.1）

上記の $X$ が $p\_g(X)>0$ を満たすなら

$$
\operatorname{Vol}(X)\ge\frac1{30}
$$

であり、$\chi(\mathcal O\_X)>0$ なら不等号は厳密となる。この下界は最良である。

### 等号例の標準環（Theorem 1.2）

$\operatorname{Vol}(X)=1/30$ なら $p\_g=1$、$q=h^{2,0}=\chi(\mathcal O\_X)=0$ で、標準環は

$$
R(X,K\_X)\cong\mathbb C[s,x,y,z,w]/(w^2-F\_{28}(s,x,y,z)),
\qquad\deg(s,x,y,z,w)=(1,3,4,5,14)
$$

となる。標準モデル $Z$ は $X\_{28}\subset\mathbb P(1,3,4,5,14)$ であり、$\omega\_Z\cong\mathcal O\_Z(1)$ である。逆に、この形の正規超曲面でcanonical特異点をもつものは $p\_g=1$、体積 $1/30$ を満たす。

$w$ を忘れる射影は内在的な有限二重被覆である。第四標準写像の一般ファイバーは連結な種数二の曲線、第五から第十三標準写像は次数二、第十四以降は双有理となる。

### 変形と単連結性（Theorem 1.3）

全ての等号例の標準モデルは、同じ次数・重みのquasismooth超曲面へ許容される $\mathbb Q$-Gorenstein変形をもつ。また標準モデルと任意の滑らかな射影的解消は位相的に単連結である。

### 等号例のモジュライ（Theorem 1.4）

豊富な標準因子をもち、$K^3=1/30$、$p\_g=1$ の正規canonical三次元多様体の粗モジュライ空間は、既約かつ有理な103次元空間で、有限商特異点をもつ。各対象の半普遍な許容 $\mathbb Q$-Gorenstein変形空間は滑らかな103次元であり、全ての変形は重み付き方程式を動かすことに由来する。

ここで許容される族とは、相対双対層の反射的冪が平坦で基底変換と可換なKollár族である。非常に一般の対象の自己同型群は被覆対合が生成する $\mathbb Z/2\mathbb Z$ で、この対合は変形空間に自明に作用する。

## 証明の見取り図

まず体積が $1/30$ より小さいと仮定する。標準系の制限とReidのRiemann–Roch公式により、第四標準鉛筆の一般ファイバーの極小モデルを三種類に絞る。正則二形式からの大域的な極の障害が、被約な標準成分の存在や低次数切断の形を制約する。標準部分環の次数成長を体積下界へ変換し、残る候補を排除する。

等号の場合には制限不等式を再検討し、随伴と留数計算によって正Euler標数を除く。残る数値的basketからHilbert級数を決め、第五標準写像が生成有限であることを示すと、先行研究の超曲面認識定理を適用できる。

最後にArtin基底上で標準環の生成元と関係式を持ち上げ、変形を方程式の変形と同定する。係数と座標変換の次元計算が103を与え、座標変換群と不変体の議論が有理性を与える。Introductionでは、この変形論がquasismoothでないcanonical対象も含む点が強調される。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.14402)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.14402v1) — Section 1, pp. 2–4
- **Introduction中で言及された主要結果:** Theorems 1.1–1.4
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.14402v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
