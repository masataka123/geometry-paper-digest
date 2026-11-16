---
layout: paper
title: Characterizations of products of projective spaces and quadrics
title_ja: Schur関手と接束の正値性による射影空間・二次曲面の積の特徴づけ
authors: Soham Ghosh, Sándor Kovács
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: We characterize products of projective spaces and smooth quadrics using Schur functors and positivity of vector bundles. First, we obtain characterizations of projective spaces and smooth quadrics using positivity of arbitrary Schur functors of extensions of a unipotent bundle by the tangent bundle, generalizing several existing results. We then prove that almost nef regular foliations whose direct sum is a subbundle of the tangent bundle determine a product decomposition, if the corresponding Schur functors admit suitable positive Schur submodules. For smooth weak Fano varieties similar results are obtained by replacing almost nefness and individual integrability of the foliations by the integrability of their total image. As special cases, we obtain product analogues of well-known characterizations of projective spaces and quadrics.
topic: algebraic-geometry
tags:
- positivity
- vector-bundles-sheaves
- foliations
- fano-varieties
- toric-geometry
arxiv_id: 2611.16529v1
arxiv_url: https://arxiv.org/abs/2611.16529
arxiv_submitted: '2026-11-12'
arxiv_updated: '2026-11-12'
summary: 接束の部分束に対するSchur関手の包含と正値性から、滑らかな射影多様体を射影空間や二次曲面の積として特徴づける。almost nefな正則葉層を用いる定理と、weak Fano性のもとで個々の葉層の可積分性を緩める定理を示す。接束の分解に関するMori型・Kobayashi–Ochiai型の積版も導く。
abstract_en: ''
summary_en: The paper asks when positivity attached to several tangent directions determines a global product of familiar homogeneous varieties. Schur-functor inclusions provide a common framework for projective-space and quadric characterizations. One product theorem uses almost nef regular foliations, while another exploits weak Fano geometry to reduce the integrability assumptions. The introduction explains how a uniform positivity estimate makes the inductive descent to the base possible.
abstract_ja: 豊富なベクトル束のSchur関手が接束のunipotent拡大のSchur関手へ入る条件から、射影空間と滑らかな二次曲面を特徴づける。さらに、almost nefな正則葉層の直和が接束の部分束となり、それぞれのSchur関手に適切な正値性があると、底多様体がこれらの積へ分解することを示す。weak Fano多様体では、各部分束のalmost nef性と個別の可積分性を、直和全体の可積分性へ置き換える。接束分解、直線束の数値条件、正則共形構造から得られる特別な特徴づけも含む。
abstract_source_url: https://arxiv.org/abs/2611.16529
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.16529v1](https://arxiv.org/abs/2611.16529)
- **著者:** Soham Ghosh, Sándor Kovács
- **初回投稿日:** 2026-11-12
- **最終更新日:** 2026-11-12
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

接束が豊富なら射影空間になるというMoriの定理をはじめ、接束の正値性は多様体の形を強く制約する。本論文は、その考えを外積・対称積を含むSchur関手へ広げ、さらに一つの射影空間や二次曲面だけでなく、それらの積を特徴づける。

積の場合には、接束の中の複数の方向を別々に制御する必要がある。著者らはalmost nefな正則葉層と、そこへSchur関手を通じて入る半豊富な束を考える。これらの束のテンソル積が豊富であることから、葉層が接束全体を占め、底多様体が大域的な積へ分解することを示す。

weak Fano性を仮定すると、各部分束が初めから葉層であることやalmost nefであることを要求せず、直和全体の可積分性から同様の結論を得る。部分束ごとの可積分性と直和の可積分性は別の条件であり、その差を吸収することが第二の積定理の特徴である。

## 背景と問題設定

$S\_\lambda$ は非零の分割 $\lambda$ に対応するSchur関手である。unipotent束とは、商が自明束となる有限フィルトレーションを持つ束をいう。almost nefとは、真閉部分多様体の可算和を除き、そこに含まれない任意の曲線への制限がnefとなることを指す。正則葉層は、商が局所自由でLie括弧に閉じた接束の部分束である。

先行研究には接束の外積・テンソル積への豊富な束からの射を使う特徴づけがある。本論文はそれをSchur関手と接束の拡大へ統一し、この一因子の結果を積分解の帰納法へ組み込む。

## 主結果

### 主定理1（Theorem 1.1）：一因子の特徴づけ

$X$ を正の次元 $n$ の滑らかな複素射影多様体とし、$U$ をunipotent束、$D$ を

$$
0\longrightarrow T\_X\longrightarrow D\longrightarrow U\longrightarrow0
$$

で定まる拡大とする。階数 $r$ の豊富な束 $E$ と、長さ $\ell(\lambda)\leq r$ の非零分割に対して、連接層としての単射 $S\_\lambda E\hookrightarrow S\_\lambda D$ があれば、$X$ は $\mathbb P^n$ または滑らかな二次曲面 $Q^n$ である。

射影空間の場合は $\det E\simeq\mathcal O\_{\mathbb P^n}(l)$ で

$$
r\leq l\leq\frac{r(n+1)}n.
$$

$r\neq n$ なら $E\simeq\mathcal O(1)^{\oplus r}$、$r=n$ ならこの束のほかに $T\_{\mathbb P^n}$ または $\mathcal O(2)\oplus\mathcal O(1)^{\oplus(n-1)}$ が現れる。最後の型は $\lambda=(k^n)$ のときに限られる。二次曲面の場合は $n\geq2$、$r\leq n$、$E\simeq\mathcal O\_{Q^n}(1)^{\oplus r}$ で、$\lambda=(k^r)$ かつ $k$ が偶数または $r=n$ となる。

### 主定理2（Theorem 1.2）：almost nef葉層からの積分解

$E\_i\subseteq T\_X$ を階数 $n\_i\geq1$ のalmost nef正則葉層、$V\_i$ を階数 $r\_i\geq1$ の半豊富な束とする。非零分割 $\lambda\_i$ が $\ell(\lambda\_i)\leq\min(r\_i,n\_i)$ を満たし、次の条件を仮定する。

- $\bigoplus\_{i=1}^rE\_i\longrightarrow T\_X$ は部分束包含である。
- $S\_{\lambda\_i}V\_i\hookrightarrow S\_{\lambda\_i}E\_i$ は連接層の単射である。
- $\bigotimes\_{i=1}^rV\_i$ は $X$ 上で豊富である。

このとき

$$
X\simeq\prod\_{i=1}^r Z\_i,\qquad
\dim X=\sum\_{i=1}^r n\_i,\qquad E\_i\simeq\operatorname{pr}\_i^\ast T\_{Z\_i},
$$

となり、各 $Z\_i$ は $\mathbb P^{n\_i}$ または $Q^{n\_i}$ である。さらに $r\_i\leq n\_i$ であり、$V\_i$ は因子上の豊富な束 $T\_i$ の引き戻しとなる。$T\_i$ の型は前述の一因子の分類に従い、各 $V\_i$ は大域生成される。最初から接束全体の分解を仮定せず、部分束包含から全体を尽くすことまで導く点が重要である。

### 主定理3（Theorem 1.3）：weak Fanoの場合

$-K\_X$ がnefかつbigである滑らかな複素射影多様体を考える。$E\_i$ は階数 $n\_i$ の部分束、$V\_i$ は階数 $r\_i$ のnef束とし、Schur単射とテンソル積の豊富性はTheorem 1.2と同じとする。ただし $\bigoplus\_iE\_i\hookrightarrow T\_X$ の像全体が可積分であることを仮定する。

このときも上の積分解と束の分類が成り立ち、$X$ は実際にはFanoとなる。各 $E\_i$ のalmost nef性も個別の可積分性も仮定しない。また $V\_i$ の半豊富性はnef性へ弱められている。

### トーリックの場合（Theorem 1.4）

滑らかなトーリックweak Fano多様体で、正の階数を持つ $r$ 個の正則葉層の直和が接束の部分束なら

$$
r\leq\rho(X).
$$

等号なら $X\simeq\prod\_i\mathbb P^{n\_i}$ であり、葉層は各因子の接束の引き戻しになる。逆に射影空間の積はそのような葉層を $\rho(X)$ 個持つ。

### 接束分解による特別な帰結（Corollaries 1.5, 1.6, 1.8）

Corollary 1.5では $T\_X=\bigoplus\_iE\_i$、各 $E\_i$ がnef、$\bigotimes\_iE\_i$ が豊富なら $X\simeq\prod\_i\mathbb P^{n\_i}$ と結論する。

Corollary 1.6では同じ階数 $n\_i$ の接束分解とnef直線束 $L\_i$ を取り、$\bigotimes\_iL\_i$ を豊富とする。$M\_i=\det E\_i\otimes L\_i^{-n\_i}$ がすべてnefなら、各因子は射影空間か二次曲面となり、$L\_i$ はその標準的な $\mathcal O(1)$ の引き戻しとなる。より強く $\det E\_i\otimes L\_i^{-(n\_i+1)}$ がnefなら射影空間の積、$\det E\_i\equiv L\_i^{\otimes n\_i}$ なら二次曲面の積となる。

Corollary 1.8は非退化な正則共形構造を用いる。接束分解の各因子が $L\_i^{\otimes2}$ 値の共形構造を持ち、$L\_i$ がnefでそのテンソル積が豊富なら、$X\simeq\prod\_iQ^{n\_i}$ となる。各 $n\_i$ が奇数なら平方根の仮定を外し、共形構造の値を取るnef直線束 $M\_i$ のテンソル積が豊富という条件で同じ結論が得られる。

## 証明の見取り図

一因子の場合はSchur単射から行列式の冪と $D$ のテンソル冪の間の非零射を作り、拡大のフィルトレーションによってDruel–Parisの特徴づけへ帰着する。束と分割の分類には直線への制限と直交群の不変量を用いる。

積の場合は葉層の構造定理から有理連結なファイバーを持つ滑らかな射 $X\to Y$ を作り、横断方向の束とSchur単射を $Y$ へ降下させる。難点はテンソル積の豊富性が自動では降下しないことである。曲線上の商直線束の次数を、固定した豊富な束の次数の正の定数倍で下から抑えることでこれを解決し、帰納法と接続による分解へ進む。weak Fanoの場合は葉層定理と接束分解の結果で必要な可積分性を確保し、Bott部分接続を通じて同じ降下の議論へ戻る。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.16529)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.16529v1) — Section 1, pp. 2–6（Abstractはp. 1）
- **Introduction中で言及された主要結果:** Theorems 1.1–1.4；Corollaries 1.5, 1.6, 1.8
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.16529v1
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
