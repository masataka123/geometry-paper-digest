---
layout: paper
title: Reflection groups on smooth projective threefolds
title_ja: 射影三次元多様体の変形とnef錐・可動錐の反射群
authors: Wendelin Lutz
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: Let $Y$ be a smooth projective threefold with $H^2(Y, \mathcal{O}_Y)=0$ and unobstructed deformations. We define reflection groups $W_Y^{sm}$ and $W_Y^{big}$ canonically associated to $Y$, acting on the nef, resp. movable cone of a very general deformation of $Y$. If $-K_Y$ is nef, we show that $\mathrm{Nef}(Y)\cap\mathrm{Big}(Y)$ (resp. $\overline{\mathrm{Mov}}(Y)\cap\mathrm{Big}(Y)$) is a fundamental domain for the action of the corresponding group on the big part of the generic cone. This generalizes work of Wilson and Lutz on Calabi--Yau threefolds. The group $W_Y^{big}$ recovers and gives a deformation-theoretic explanation for the Weyl group action on divisor classes of point blowups of $\mathbb P^3$ studied by Dolgachev--Ortland and Mukai.
topic: algebraic-geometry
tags:
- birational-geometry
- positivity
- hodge-theory
- moduli
- calabi-yau-geometry
arxiv_id: 2610.32450v1
arxiv_url: https://arxiv.org/abs/2610.32450
arxiv_submitted: '2026-10-23'
arxiv_updated: '2026-10-23'
summary: 変形が非障害的で構造層の第2コホモロジーが消える滑らかな射影三次元多様体に、一般変形のnef錐と可動錐に作用する反射群を構成する。反標準因子がnefなら、元の錐のbigな部分が基本領域となり、変形で消える壁を反射対称性として理解できる。
abstract_en: ''
summary_en: The nef and movable cones of a threefold may acquire additional room under deformation. This paper constructs reflection groups that account for disappearing walls when the deformation space is smooth and the second structure-sheaf cohomology vanishes. Under nefness of the anticanonical divisor, the original cones give fundamental domains on the big locus. Applications reinterpret Weyl group actions for blowups of projective three-space and relate discriminant quartics to root systems.
abstract_ja: 滑らかな射影三次元多様体のnef錐と可動錐が変形によってどう変わるかを、反射群を通して調べる。構造層の第2コホモロジーが零で変形空間が滑らかな場合に、非常に一般の変形の両錐に忠実に作用する群を構成する。反標準因子がnefなら元の錐のbig部分が基本領域となる。これによってCalabi–Yau三次元多様体に対する既存理論を拡張し、射影3空間の点での爆発に現れるWeyl群の作用を変形の幾何から説明する。
abstract_source_url: https://arxiv.org/abs/2610.32450
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.32450v1](https://arxiv.org/abs/2610.32450)
- **著者:** Wendelin Lutz
- **初回投稿日:** 2026-10-23
- **最終更新日:** 2026-10-23
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

nef錐は多様体の収縮を、可動錐は小さい双有理変換を含めた因子の動きを記録する。多様体を変形すると、特殊なファイバーにあった壁が消え、錐が広がることがある。本論文は、この変化を反射群の作用として組織化する。

滑らかな射影三次元多様体 $Y$ に対し、nef錐用の群と可動錐用の群を定義し、非常に一般の変形の錐に忠実に作用することを示す。群の構成には反標準因子の正値性を仮定せず、変形の非障害性と $H^2(Y,\mathcal O\_Y)=0$ を用いる。

反標準因子がnefなら、元の多様体の錐のbig部分が基本領域になる。この結果はCalabi–Yauの場合を拡張するほか、$\mathbb P^3$ の点での爆発に現れるWeyl群を、特殊な配置への退化によって幾何学的に説明する。

## 背景と問題設定

$H^2(Y,\mathcal O\_Y)=0$ により、小さい変形族の数値的因子類の空間を平行移動で同一視できる。$\operatorname{Def}(Y)$ の滑らかさの下で、$Y$ と非常に一般の変形 $Y^{\mathrm{gen}}$ の錐を同じ $N^1(Y,\mathbb R)$ の中で比較する。

反射の基本例は、曲線上の線織曲面 $E\subset Y$ で、一般ファイバーの類 $\ell\_E$ が $K\_Y\cdot\ell\_E=0$ を満たす場合である。随伴により $E\cdot\ell\_E=-2$ となり、

$$
\sigma\_E(x)=x+(x\cdot\ell\_E)[E]
$$

は $\ell\_E^\perp$ を固定して $[E]$ を $-[E]$ に送る。この定義は因子と曲線の双対性を使い、因子空間上の双線形形式をあらかじめ必要としない。論文はこれを準線織曲面やcrepantな小さい変換上の円錐曲線束へ拡張する。

## 主結果

### 反射作用と基本領域（Theorem 1.1）

滑らかな射影三次元多様体 $Y$ が $H^2(Y,\mathcal O\_Y)=0$ と $\operatorname{Def}(Y)$ の滑らかさを満たすとき、反射群

$$
W\_Y^{\mathrm{sm}}\subset W\_Y^{\mathrm{big}}
$$

はそれぞれ $\operatorname{Nef}(Y^{\mathrm{gen}})$ と $\overline{\operatorname{Mov}}(Y^{\mathrm{gen}})$ に忠実に作用する。さらに $-K\_Y$ がnefなら、

$$
\operatorname{Nef}(Y)\cap\operatorname{Big}(Y),\qquad
\overline{\operatorname{Mov}}(Y)\cap\operatorname{Big}(Y)
$$

は一般変形の対応するbig部分での作用の基本領域である。特にnef錐が変わらないことは $W\_Y^{\mathrm{sm}}=\lbrace 1\rbrace $ と、閉可動錐が変わらないことは $W\_Y^{\mathrm{big}}=\lbrace 1\rbrace $ と同値になる。作用の存在と基本領域の主張では、反標準因子に対する仮定が異なる。

Proposition 1.5は、$-K\_Y$ がnefの場合、変形で消えるnef錐・可動錐の余次元1の面と、対応する変形根の類との全単射を与える。これが反射群による記述を錐の実際の変化に結びつける。

### 射影3空間の8点爆発への応用（Theorem 1.2）

非常に一般の8点での $\mathbb P^3$ の爆発に対し、

$$
W(\widetilde E\_7)=W(T\_{2,4,4})
$$

が $\operatorname{Mov}^+(Y^{\mathrm{gen}})$ に有理多面体の基本領域を持って作用する。これはStenger–Xieの既知の定理を回復するものであり、新たな説明では基本領域を特殊な退化の可動錐として実現する。上付き $+$ は、錐の閉包の有理点が張る凸包という論文の規約である。

### 二次曲面網の判別四次曲線（Theorem 1.6）

非退化条件を満たす $\mathbb P^3$ の二次曲面網 $N$ から得る有理楕円三次元多様体について、対応する有限根系 $R$ のADE型は判別四次曲線

$$
\Delta=\lbrace \det(\lambda\_1Q\_1+\lambda\_2Q\_2+\lambda\_3Q\_3)=0\rbrace \subset(\mathbb P^2)^\ast
$$

の特異点のADE型に一致する。非退化条件は、網の中に二つの二次曲面が存在し、その交叉が基点集合に沿って滑らかであることをいう。Introductionは、極端な楕円束で観察されていた対応をこの範囲全体へ広げると説明する。

## 証明の見取り図

変形で例外因子が消えることを、その法束に関する障害写像の全射性で検出する。正値性なしでの全射性を得るため、SaitoのHodge加群と半小写像の分解定理を使う。次に、葉層構造に関するSpicerの錐定理を利用して、変形根に対する収縮可能な円錐曲線モデルをフロップで構成する。

変形族のフロップが因子類上の反射を実現し、一般化された根系の理論を通して群作用を得る。$-K\_Y$ のnef性は、消える壁を尽くして基本領域を示す段階で使われる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.32450)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.32450v1) — Section 1, pp. 1–7（Section 2の前まで）
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2, 1.6、Proposition 1.5
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.32450v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
