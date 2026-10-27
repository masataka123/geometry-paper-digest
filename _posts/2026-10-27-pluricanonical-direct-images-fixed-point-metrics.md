---
layout: paper
title: Positivity of Relative Pluricanonical Direct Images via Fixed-Point Metrics
title_ja: 不動点計量による相対多重標準直像の正値性
authors: Jixiang Fu, Yunyang Xiao
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CV
arxiv_abstract: We develop a direct analytic approach to positivity of relative pluricanonical direct images through a fixed-point Hermitian metric by direct differential curvature calculations. The curvature resolvent formula from fixed-point equation leads to two-sided estimates of entire Nakano curvature by determinant curvature. In this way, we identify generic rank of determinant curvature with birational variation dimension for a projective algebraic fibration between smooth connected projective varieties with general fiber of general type and maximal birational variation, assuming $mK_F$ is globally generated or the $m$-canonical map is birational for general fiber $F$. In the global generation case, Green--Griffiths Conjecture asks for the tautological bigness of the ordinary symmetric powers $\operatorname{Sym}^{\ell}f_*\omega_{X/Y}^{\otimes m}$, without passing to reflexive hulls, for $\ell\geq P_m(F)=h^0(F,mK_F)$ whenever $m\geq 1$. We prove it for all $\ell\geq1$ at levels $m\geq
  2$, also in the case of birational $m$-canonical map, but construct a counterexample at level $m=1$. Over curves, curvature and boundary estimates give a direct analytic proof of Viehweg's ampleness theorem requested by Fujino. For smooth projective families, we also establish numerical dimension and vanishing results related to the birational variation dimension.
topic: algebraic-geometry
tags:
- positivity
- vector-bundles-sheaves
- singularities
- l2-methods
arxiv_id: 2610.35590v1
arxiv_url: https://arxiv.org/abs/2610.35590
arxiv_submitted: '2026-10-26'
arxiv_updated: '2026-10-26'
summary: 相対多重標準直像に不動点Hermitian計量を構成し、Nakano曲率全体を行列式曲率で上下から評価する。一般型ファイバーの変動と曲率の階数を結び付け、対称冪の巨大性、曲線上の豊富性と平坦性の二者択一、消滅定理を導く一方、標準直像そのものには反例を与える。
abstract_en: ''
summary_en: The paper approaches positivity of direct images by choosing a Hermitian metric that is fixed by a fiberwise operator. Its curvature calculation compares all bundle directions with the determinant and identifies the directions in which the family varies. This yields bigness results for ordinary symmetric powers under explicit pluricanonical hypotheses, together with ampleness and vanishing applications. A family with trivial canonical direct image shows why the pluricanonical level cannot simply be lowered to one.
abstract_ja: 一般型ファイバーを持つ射影族について、多重標準直像の不動点計量を用いた直接的な曲率計算を行う。Nakano曲率と行列式曲率の両側評価、および曲率の階数と双有理変動の対応が基本となる。多重標準次数が2以上で大域生成または双有理性を仮定すると、最大変動の族の通常の全正対称冪がtautologically bigになる。次数1では自明な標準直像を持つ反例を構成し、さらに曲線上の豊富性、数値次元、コホモロジー消滅へ応用する。
abstract_source_url: https://arxiv.org/abs/2610.35590
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.35590v1](https://arxiv.org/abs/2610.35590)
- **著者:** Jixiang Fu, Yunyang Xiao
- **初回投稿日:** 2026-10-26
- **最終更新日:** 2026-10-26
- **主分類・副分類:** math.AG（主分類）; math.CV
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

族のファイバーが変化するとき、その変動を相対多重標準直像の正値性がどの程度記録するかを扱う。行列式の正値性だけでは、ベクトル束の各方向の曲率や特異ファイバー付近の挙動までは分からない。本論文は一つの不動点計量からこれらを同時に制御する。

中心となるのは、行列式曲率が正の基底方向では全ての切断方向にも正値性があるという定量的評価である。一般ファイバーの多重標準系について大域生成または双有理性を仮定すると、曲率が消える方向を変動のない方向と同定できる。

幾何学的帰結は巨大性、豊富性、数値次元、消滅定理に及ぶ。ただし多重標準次数 $m\ge2$ は本質的である。$m=1$ では、ファイバーが変動し標準束が豊富かつ大域生成でも直像が自明になる族を構成している。したがって全ての次数で同じ正値性が成立するという結論ではない。

## 背景と問題設定

滑らかな複素多様体間の連結ファイバーを持つ射影射 $f:X\to Y$ に対して

$$
E\_m=f\_\ast \omega\_{X/Y}^{\otimes m},\qquad P\_m(F)=h^0(F,mK\_F)
$$

と置く。一般ファイバー $F$ に関する条件(G)は $mK\_F$ の大域生成、条件(B)は完全線形系が定める $m$-標準写像の像への双有理性である。(B)では基点や固定成分を許す。双有理変動の次元を $\operatorname{Var}(f)$ と書く。

巨大性には通常の連接層の対称冪を用い、反射的包へ置き換えない。連接層の射影化の主成分、すなわち局所自由な開集合上の射影束の閉包において、$\mathcal O(1)$ がbigであることをtautological bignessと呼ぶ。

## 主結果

### 曲率と変動（Theorem A）

まず滑らかな射影族と水平な有効有理因子 $\Delta$ を考え、全空間と各ファイバーの対がkltであるとする。$m\ge2$、$m\Delta$ が整数係数で、$E=f\_\ast \mathcal O\_X(m(K\_{X/Y}+\Delta))$ が正の階数 $r$ の局所自由層かつファイバーごとのbase changeを満たすと仮定する。不動点計量 $G$ が滑らかな開集合上で、その曲率 $K$ と凍結した計量の曲率 $Q$ は

$$
K=\bigl(\operatorname{id}\otimes(I-L)^{-1}\bigr)Q,\qquad \Vert L\Vert=\frac{m-1}{m}
$$

を満たす。$L$ とresolventは完全正値である。$\tau=\operatorname{Tr}\_E K$ とすると、局所一様な $\sigma>0$ に対してNakanoの意味で

$$
\sigma\tau\otimes I\le K\le [r-(r^2-1)\sigma]\tau\otimes I,
\qquad \ker K=(\ker\tau)\otimes E
$$

となる。さらに $\Delta=0$、一般ファイバーが一般型で(G)または(B)を満たすなら、非空Zariski開集合上で

$$
\operatorname{rank}\tau=\operatorname{Var}(f),\qquad
\operatorname{rank}K=r\operatorname{Var}(f)
$$

を得る。(G)では核をKodaira–Spencer写像、(B)では双有理分類写像の微分と対応させる。

### 通常の対称冪の巨大性（Theorem B）

滑らかな連結射影多様体間の全射射影射で、ファイバーは連結かつ正次元、$\dim Y>0$ とする。一般ファイバーが一般型、$\operatorname{Var}(f)=\dim Y$、$m\ge2$、(G)または(B)を仮定すると

$$
\operatorname{Sym}^{\ell}E\_m\ \text{は全ての }\ell\ge1\text{ でtautologically big}
$$

となる。Green–Griffiths予想の(G)の場合の範囲 $\ell\ge P\_m(F)$ を改善し、基点を許す(B)にも及ぶ。

### 次数1の反例（Theorem C）

滑らかな連結射影全空間から $\mathbb P^1$ への平坦全射族で、連結ファイバー、被約正規交叉特異ファイバーを持ち、一般ファイバー $S$ の $K\_S$ が豊富かつ大域生成でありながら

$$
\operatorname{Var}(f)=1,\qquad f\_\ast \omega\_{X/\mathbb P^1}\simeq\mathcal O\_{\mathbb P^1}^{\oplus4}
$$

となる例が存在する。どの正対称冪もtautologically bigにならず、$m=1$ の障害は特異ファイバーを除いた開集合だけの現象ではない。

### 曲線上の豊富性か平坦性か（Theorem D）

滑らかな射影曲線 $C$ 上の族に水平有効有理因子 $\Delta$ を加え、$(X,\Delta)$ はklt、重複度込みの各スキームファイバー $X\_c$ に対して $(X,\Delta+X\_c)$ はlog canonicalとする。$m\ge2$、$m\Delta$ は整数係数、$E\_m\ne0$ なら $E\_m$ はnefであり、$\deg E\_m>0$ ならample、$\deg E\_m=0$ なら不動点計量が滑らかなHermitian平坦計量へ延長する。この二者択一では、境界の点質量を除くための対の仮定が重要である。

### 数値次元と消滅（Theorem E）

射影基底 $Y$ 上の滑らかな全射射影族で、連結な正次元一般型ファイバーを持つとする。$m\ge2$、(G)または(B)、$r=\operatorname{rank}E\_m>0$ のもと、$M=\det E\_m$、$v=\operatorname{Var}(f)$、$d=\dim Y$ と置けば、$M$ とtautological line bundleはnefで

$$
\nu(M)=v,\qquad \nu(\mathcal O\_{\mathbb P\_q(E\_m)}(1))=r-1+v
$$

となる。また定理Aの一様評価定数 $\sigma\_\ast >0$ を用い、整数 $a\ge1$、$b\ge0$ が $b<a\sigma\_\ast $ を満たすと、任意の $P\in\operatorname{Pic}^0(Y)$ に対して

$$
H^q(Y,K\_Y\otimes\operatorname{Sym}^a E\_m\otimes M^{-b}\otimes P)=0
\quad(q>d-v)
$$

が成り立つ。

## 証明の見取り図

Narasimhan–Simha構成に由来するHilbert–Fubini–Study作用素の縮小性から不動点計量を得る。不動点方程式を微分したresolvent公式と評価二次形式の下界が、行列式によるNakano曲率の両側評価を与える。次に曲率核と族の変動を対応させる。巨大性には特異計量の延長とtautological line bundleを用い、曲線上では境界成長を制御して次数を曲率質量と同定する。消滅定理では、対称冪の曲率評価を $L^2$ 解法へつなぐ。これらはIntroductionに述べられた証明経路である。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.35590)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.35590v1) — Section 1, pp. 1–6
- **Introduction中で言及された主要結果:** Theorems A–E
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.35590v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
