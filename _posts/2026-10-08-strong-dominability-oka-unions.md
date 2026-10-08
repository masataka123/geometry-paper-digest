---
layout: paper
title: A Strong Dominability Criterion and an Oka Union Theorem
title_ja: Strong dominabilityによるOka性の判定と解析的部分集合を越える拡張
authors: Yun-Heng Du, Bin Guo, Peng-Chao Wang, Song-Yan Xie
arxiv_primary_category: math.CV
arxiv_categories:
- math.CV
arxiv_abstract: 'We prove that an $n$-dimensional complex manifold $Y$ is Oka if and only if it is strongly dominable: for every $y\in Y$, there is an entire map $F:\mathbb{C}^n\to Y$ such that $F(0)=y$ and $dF_0$ is invertible. The argument converts this pointwise domination into the convex approximation property in every source dimension. We also show that the Oka property extends across proper closed complex analytic subsets: if $A$ is such a subset of a connected complex manifold $X$ and $X\setminus A$ is Oka, then $X$ is Oka. The criterion has broad applications and produces many new examples of Oka manifolds.'
topic: several-complex-variables
tags:
- oka-theory
arxiv_id: 2610.10475v1
arxiv_url: https://arxiv.org/abs/2610.10475v1
arxiv_submitted: '2026-10-07'
arxiv_updated: '2026-10-07'
summary: 複素多様体がstrongly dominableであることと、任意の始域次元でOka性を持つことの同値を示す。この判定から通常の開近傍によるOka性の局所判定を導き、真の閉解析的部分集合の補集合がOkaなら全体もOkaであることを証明する。点ごとの整写像の存在を、大域的な正則近似へ結びつける結果である。
abstract_en: ''
summary_en: This paper addresses the gap between pointwise strong dominability and approximation of maps from Stein spaces. Its central assertion upgrades the former to the full Oka property without restricting the dimension of the target. The resulting criterion makes the Oka condition local for open covers and allows proper closed analytic subsets to be filled back in. The Introduction connects these principles to stratified manifolds and spaces of rational functions, while locating rationally connected projective manifolds in a separate application.
abstract_ja: 各点を通り、その点で可逆な微分を持つ整写像が存在するという条件から、複素多様体のOka性を特徴づける。点ごとのstrong dominabilityを全ての始域次元における凸近似性へ引き上げ、従来のOka-1性を越える結論を得る。また、連結複素多様体の真の閉複素解析的部分集合を除いた補集合がOkaであれば、その部分集合を付け戻した全体もOkaとなる。この二つの原理は、開近傍による局所判定や新しいOka多様体の構成に利用される。
abstract_source_url: https://arxiv.org/abs/2610.10475v1
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.10475v1](https://arxiv.org/abs/2610.10475v1)
- **著者:** Yun-Heng Du, Bin Guo, Peng-Chao Wang, Song-Yan Xie
- **初回投稿日:** 2026-10-07
- **最終更新日:** 2026-10-07
- **主分類・副分類:** math.CV（主分類）、副分類なし
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

複素多様体の各点を、微分が可逆な整写像で捉えられることから、任意の次元の始域に対する正則近似が導けるだろうか。本論文はこの問いを扱い、strong dominabilityがOka性と同値であることを示す。点ごとに異なる整写像を選ぶ条件が、多様体全体の正則写像の柔軟性を判定する。

Oka多様体がstrongly dominableであることは既知であり、逆方向についても従来は開Riemann面を始域とするOka-1性が得られていた。本論文の中心は、この一次元の近似・補間原理からさらに進み、全ての始域次元で凸近似性を得る点にある。同値の条件は、単にどこか一点で支配可能であることではなく、全ての点で支配可能であることである。

この判定法から、各点がOka開近傍を持つ複素多様体はOkaであることが従う。さらに、連結複素多様体から真の閉複素解析的部分集合を除いた補集合がOkaなら、もとの多様体もOkaであるという拡張定理を示す。開集合による局所判定と、解析的な例外集合を付け戻す操作が、別々の定理として得られる。

Introductionは有限Oka層別化を持つ多様体や、有理写像のパラメータ空間への応用も述べる。有理連結な滑らかな射影多様体がOkaであるという応用は、An・Guo・Wang・Xieによる別の共同研究の結果として紹介されており、本論文の主役はそれを支える一般的な解析的判定法である。

## 背景と問題設定

Oka原理は、Stein空間から複素多様体への連続写像を、近似や補間を保って正則写像へ変形する問題を扱う。IntroductionはOkaとGrauertによる古典的な原理、Gromovのdominating sprayによる幾何学的な十分条件を振り返ったうえで、Forstneričによる凸近似性との同値を出発点とする。

<p>
Definition 1.1では、複素多様体 $Y$ のOka性を凸近似性CAPで定義する。任意の $m\ge1$、コンパクト凸集合 $K\subset\mathbb C^m$、その開近傍 $U$ 上の正則写像 $f:U\to Y$、および $\varepsilon>0$ に対し、整写像 $F:\mathbb C^m\to Y$ で次を満たすものが存在するという条件である。
</p>

<div>
$$
\sup_{z\in K}d_Y\bigl(F(z),f(z)\bigr)\lt\varepsilon.
$$
</div>

<p>
ここで $d_Y$ は $Y$ の位相を定める任意の距離である。始域の次元 $m$ を全て動かす点が重要となる。以下では原論文の規約に従い、複素多様体は連結とする。
</p>

<p>
これに対してDefinition 1.2のstrong dominabilityは、$n=\dim_{\mathbb C}Y$ としたとき、各 $y\in Y$ に対して、次を満たす整写像 $H_y$ が存在するという条件である。
</p>

<div>
$$
H_y:\mathbb C^n\longrightarrow Y,\qquad
H_y(0)=y,\qquad
d(H_y)_0:\mathbb C^n\xrightarrow{\ \sim\ }T_yY.
$$
</div>

<p>
各写像は原点の近くで局所双正則となるが、$y$ ごとに別の写像を選んでよい。全ての点を一つの写像で覆うという仮定ではない。Introductionは、Oka性からこの条件が一次jet補間によって従うことと、Alarcón–Forstneričの先行研究からstrong dominabilityがOka-1性を導くことを、既知の結果として位置づけている。
</p>

## 主結果

### strong dominabilityによる完全な判定（Theorem 1.3）

複素多様体がOkaであることと、strongly dominableであることは同値である。

<div>
$$
Y\text{ is Oka}\quad\Longleftrightarrow\quad
Y\text{ is strongly dominable}.
$$
</div>

対象は連結複素多様体であり、コンパクト性、射影性、Kähler性は定理の仮定に含まれない。右辺はDefinition 1.2の全ての点における条件を意味する。左辺のCAPは任意の始域次元で成立するため、結論はOka-1性にとどまらない。

新しい方向は、点ごとの整写像から全ての次元の凸近似を導くことである。これにより、近似したい写像やコンパクト凸集合を一つずつ扱う代わりに、標的多様体の各点で整写像による局所的な支配を構成するという判定が可能になる。

### 通常の開近傍による局所判定（Theorem 1.4）

各点がOkaである開近傍を持つ複素多様体は、全体としてOkaである。ここで開集合は通常のEuclidean位相についての開集合でよい。

<p>
すなわち、各 $y\in Y$ に対して、$y\in U_y\subset Y$ となるOka開部分多様体 $U_y$ が存在すれば、$Y$ はOkaとなる。Introductionはこの定理をTheorem 1.3の直接の帰結として述べる。
</p>

Kusakabeによって既に知られていたのは、Zariski開Oka部分集合による被覆からOka性を導く結果であった。Theorem 1.4は、同じ局所判定に通常の開集合で十分であるかという問いに肯定的に答える。

### 閉解析的部分集合を越える拡張（Theorem 1.5）

真の閉複素解析的部分集合の補集合がOkaなら、もとの連結複素多様体もOkaとなる。

<div>
$$
A\subsetneq X\text{ closed complex analytic},\qquad
X\setminus A\text{ is Oka}
\quad\Longrightarrow\quad X\text{ is Oka}.
$$
</div>

<p>
仮定は、$X$ が連結複素多様体であり、$A$ が真の閉複素解析的部分集合であることである。例外集合上の点にあらかじめOka開近傍を与える必要はなく、補集合からその集合上へ性質を伝播させる点がTheorem 1.4とは異なる。
</p>

<p>
Introductionはさらに、$X\setminus A$ の各点が $X$ に値を持つ整写像によって支配されれば十分であると述べ、Corollary 5.5を参照している。この補足では、整写像の像全体が $X\setminus A$ に入ることまでは要求していない。
</p>

### Introductionで述べられる応用

有限Oka層別化を持つ多様体はOkaである（Corollary 4.5）。有限Oka層別化とは、閉複素解析的部分空間による有限の降下フィルトレーションで、各差集合の連結成分がOkaとなるものを指す。IntroductionはTheorem 1.3とForstnerič–Lárussonの既存の層別化定理を組み合わせる帰結として説明する。

<p>
また、次数 $d\ge1$ の有理写像の空間 $\operatorname{Hol}_d(\mathbb P^1,\mathbb P^1)$ はOkaとなる（Proposition 6.1）。Introductionの説明では、無限遠点での値を0に固定したファイバー内にEuclidの互除法によって稠密なZariski開Oka部分を見いだし、Theorem 1.5でファイバー全体へ拡張した後、評価写像の束構造を用いて写像空間へ移る。
</p>

## 証明の見取り図

<p>
Introductionは、点ごとの支配から局所的な平面近似性 $\mathcal L_n$ を作り、それを任意次元の凸近似へ広げる道筋を述べる。支配する整写像の局所逆写像を使って標的への写像を $\mathbb C^n$ へ持ち上げれば、多項式近似を利用できる。これが最初の局所的な入力である。
</p>

次に、始域の多項式座標変換で横断的なパラメータを整理し、正則なパラメータ依存性を保ちながら平面方向の拡張を繰り返す。貼り合わせとexhaustionを通じて多重円板上の整写像近似を得た後、実の面に関する帰納法とinterface gluingによって任意のコンパクト凸集合へ進む。この最終段階がCAPとTheorem 1.3を与える。著者らは、引用文献[29]の曲面標的に対する構成を任意次元の標的へ拡張することを、この部分の基礎として明記している。

Theorem 1.5では、解析的部分集合上の点を中心とし、境界が補集合に入る小さな座標直線円板から出発する。近傍の円板に沿った平面拡張により、独立な接方向へ広がる正則族を作る。さらにAn–Xieのscalar-substitutionの議論を適用し、境界で成立する局所的な性質を中心へ運ぶ。これが解析的部分集合を越える伝播を担う。

以上はIntroductionに記された構成の役割と流れの紹介であり、後続節の貼り合わせ評価や極限操作の証明全体を検証したものではない。

## 原論文との対応

- **Abstractページ:** https://arxiv.org/abs/2610.10475v1
- **Introduction:** Section 1、pp. 1–3。p. 3のSection 2開始前まで。
- **定義:** Definition 1.1（CAPによるOka性）、Definition 1.2（点におけるdominabilityとstrong dominability）。
- **主定理:** Theorems 1.3、1.4、1.5。Introduction中の応用としてCorollaries 4.5、5.5およびProposition 6.1に言及する。
- **論文構成:** p. 3。Section 2は局所近似と貼り合わせ、Sections 3–4は多重円板から凸近似への移行、Section 5は解析的部分集合を越える伝播、Section 6は有理写像空間への応用を扱うと説明されている。
- **確認したarXivバージョン:** v1。
- **確認したライセンス:** arXiv non-exclusive distribution license。
- **source_scope:** Abstract and Introduction
