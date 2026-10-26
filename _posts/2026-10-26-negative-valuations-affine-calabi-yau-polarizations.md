---
layout: paper
title: On polarizations of affine Calabi--Yau varieties
title_ja: アフィンCalabi–Yau多様体の負の付値、コンパクト化とK半安定性
authors: Yueqiao Wu
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.DG
arxiv_abstract: Let $(X, \Omega)$ be an affine Calabi--Yau variety, by which we mean a klt affine variety $X$ with a non-vanishing algebraic volume form $\Omega$. In connection with complete Calabi--Yau metrics of Euclidean volume growth on $(X, \Omega)$, we study algebraic aspects of polarizations of $X$ given by a negative valuation. We show that such a valuation is finitely generated with a klt degeneration if and only if $X$ admits a dlt log Fano type compactification, generalizing a compactification considered by Tian--Yau. We further give a valuative criterion detecting K-semistability of the degeneration by a negative valuation.
topic: algebraic-geometry
tags:
- calabi-yau-geometry
- k-stability
- singularities
- minimal-model-program
- noncompact-kahler-geometry
arxiv_id: 2610.32036v1
arxiv_url: https://arxiv.org/abs/2610.32036
arxiv_submitted: '2026-10-23'
arxiv_updated: '2026-10-23'
summary: アフィンCalabi–Yau多様体の無限遠の退化を記述する負の付値を研究する。有限生成かつkltな退化を与えることとKollárコンパクト化の存在との同値性を示し、退化先のK半安定性を無限遠の付値全体に対する不等式で判定する。
abstract_en: ''
summary_en: Complete Calabi–Yau metrics motivate studying degenerations determined by functions at infinity rather than valuations centered at a singular point. The paper relates finite generation of a negative valuation to a compactification with divisorial log terminal boundary and ample negative log canonical divisor. It then tests K-semistability of the associated cone using discrepancies and relative volumes. A further quantitative comparison with a compactification provides a sufficient condition for finite generation.
abstract_ja: 非消滅の代数的体積形式を持つkltアフィン多様体について、非定数関数に負の値を取る付値から定まる偏極を調べる。対応する次数付き環が有限生成で退化先がkltであるという条件を、無限遠境界を持つKollárコンパクト化によって特徴づける。また、無限遠の付値に対する相対体積とlog discrepancyの比較によってK半安定性を判定する。有限生成を仮定しないK半安定な準単項付値に対しても、近いlog Fano型コンパクト化が存在する場合には有限生成を導く。
abstract_source_url: https://arxiv.org/abs/2610.32036
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.32036v1](https://arxiv.org/abs/2610.32036)
- **著者:** Yueqiao Wu
- **初回投稿日:** 2026-10-23
- **最終更新日:** 2026-10-23
- **主分類・副分類:** math.AG（主分類）; math.DG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

非コンパクトCalabi–Yau多様体の無限遠で見える錐は、計量の大域的性質を記録する。特異点を拡大して得る局所接錐と違い、無限遠の接錐は同じ多様体上でも計量によって変わり得る。本論文は、その代数的退化を記述する「負の付値」を研究対象とする。

最初の結果は、負の付値が有限生成でkltな錐への退化を与えることを、無限遠に境界を加えたコンパクト化の幾何によって特徴づける。境界がdltで負の対数標準因子がampleとなるKollárコンパクト化が現れ、Tian–Yau型のコンパクト化を高い有理階数の付値へ拡張する。

次に、退化先のK半安定性を付値だけで判定する不等式を与える。さらに適切なコンパクト化との近さを数量化し、その条件の下で有限生成を導く。ただし、付値的なK半安定条件だけから常に有限生成が従うという一般問題は未解決として残す。

## 背景と問題設定

複素数体上で $X=\operatorname{Spec}R$ をkltアフィン多様体とし、非定数可逆関数を持たず、非消滅の代数的体積形式 $\Omega$ を持つとする。動機となる完備Kähler計量は、複素次元を $n$ として

$$
\omega^n=i^{n^2}\Omega\wedge\overline\Omega,\qquad
\operatorname{vol}\_\omega(p,r)\sim r^{2n}
$$

を満たすEuclid的体積増大のCalabi–Yau計量である。論文はその存在問題の代数的側面を扱い、すべての対象について計量の存在を直接証明するわけではない。

負の付値 $v$ はすべての非定数 $f\in R$ に対し $v(f)<0$ を満たす。付随するフィルトレーションと錐は

$$
F\_v^\lambda R=\lbrace f\in R\mid v(f)\ge-\lambda\rbrace ,\qquad
X\_v=\operatorname{Spec}\operatorname{gr}\_v R
$$

で与えられる。因子的付値のlog discrepancyは $A\_X(\operatorname{ord}\_E)=1+\operatorname{ord}\_E(\Omega)$ と定義され、無限遠では負の値が重要になる。

## 主結果

### コンパクト化による有限生成の特徴づけ（Theorem A）

負の付値 $v\_0$ が有限生成で $X\_{v\_0}$ がkltであることは、次のKollárコンパクト化の存在に同値である。境界 $E=\sum\_{i=1}^rE\_i=\overline X\setminus X$ に対し、各 $E\_i$ は負の因子的付値で $A\_X(E\_i)<0$ を満たし、

$$
(\overline X,E)\text{ はdlt},\qquad -(K\_{\overline X}+E)\text{ はample},
\qquad v\_0\in\operatorname{QM}(\overline X,E),\quad
\operatorname{rat.rk}(v\_0)=r
$$

となる。ここで $\operatorname{QM}$ は境界に関する準単項付値の空間である。この定理自体は退化先のK安定性を仮定しない。因子的な場合にはTian–Yauの幾何的設定に対応する。

### 無限遠の付値によるK半安定性判定（Theorem B）

有限生成の負の付値 $v\_0$ から得る $X\_{v\_0}$ がkltならば、その偏極付きlog Fano錐のK半安定性は

$$
A\_X(v\_0)<0,\qquad A\_X(v)\ge S(v\_0;v)\quad(v\in X\_\infty^{\mathrm{val}})
$$

に同値である。$X\_\infty^{\mathrm{val}}$ は $X$ 上に中心を持たない付値の空間である。$S$ は二つのフィルトレーションの相対体積から作られる量であり、共通直交基底 $\lbrace f\_i\rbrace $ を用いて

$$
\operatorname{vol}\_\lambda(v;\chi)=\frac{\sum\_i\chi(f\_i)}{\lambda\dim F\_v^\lambda R},\qquad
S(v;\chi)=A\_X(v)\lim\_{\lambda\to\infty}\frac{\operatorname{vol}\_\lambda(v;\chi)}{\operatorname{vol}\_\lambda(v;v)}
$$

と定める。局所特異点の判定との重要な違いは、無限遠の付値全体を検査する点にある。

### コンパクト化との近さから有限生成へ（Theorem C）

付値的判定を満たす負の準単項付値 $v\_0$ とlog Fano型コンパクト化 $(\overline X,F)$ に対し、

$$
T(v\_0;F)T(F;v\_0)\le1-A\_X(F)^{-1},\qquad
T(\chi;\chi')=\sup\_{f\in R\setminus\mathbb C}\frac{\chi'(f)}{\chi(f)}
$$

ならば $v\_0$ は有限生成で、$X\_{v\_0}$ はK半安定になる。これは近いコンパクト化から所望の退化を得る十分条件であり、近さの仮定を除いた一般的有限生成を主張するものではない。

## 証明の見取り図

Theorem Aではspecialな有理補因子のlc placeとして付値を実現し、無限遠の因子を例外因子のように扱うMMPを実行する。Introductionは、相対MMPではなくCalabi–Yau条件を本質的に用いる点を強調する。

Theorem Bの因子的な場合は随伴の逆を使い、一般の場合は因子的付値による近似で導く。Theorem CではK半安定な付値が自らのフィルトレーションに関する無限遠の閾値を計算することを利用し、コンパクト化上の対のlc placeとして実現する。数量的条件は、この構成で境界が有効な対を得るために働く。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.32036)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.32036v1) — Introduction, pp. 1–5（Section 1の前まで）
- **Introduction中で言及された主要結果:** Theorems A, B, C
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.32036v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
