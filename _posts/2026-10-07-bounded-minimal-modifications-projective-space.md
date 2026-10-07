---
layout: paper
title: Boundedness of minimal modifications
title_ja: 射影空間上の極小修正の有界性
authors: Junpeng Jiao
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: |-
  For fixed $n$ and $\epsilon>0$, we prove boundedness of projective birational morphisms $f\colon X\to\mathbb P^n$ over $\mathbb C$ for which $(X,B)$ is an $\epsilon$-lc pair, $B\geq 0$, $K_X+B$ is nef over $\mathbb P^n$, and $\mathrm{deg}(f_*B)$ is bounded. The nonzero coefficients of $B$ need not have a positive lower bound, and $(\mathbb P^n,f_*B)$ need not be log canonical. The $f$-exceptional prime divisors on $X$, equipped with their reduced induced scheme structures, form a bounded family of projective schemes, including when they are nonnormal. We also obtain a uniform positive lower bound for the log canonical thresholds of pullbacks of all effective target divisors of bounded degree. The boundedness statement proved in this paper was originally conjectured by Caucher Birkar.
topic: algebraic-geometry
tags:
- birational-geometry
- singularities
- moduli
- multiplier-ideals-extension
arxiv_id: 2610.05638v2
arxiv_url: https://arxiv.org/abs/2610.05638v2
arxiv_submitted: '2026-10-05'
arxiv_updated: '2026-10-06'
summary: |-
  射影空間への双有理射に対し、境界係数に正の一様下限を置かずに有界性を得る問題を扱う。固定した次元・特異点の下限・押し出した境界の重み付き次数の上限の下で、相対的にnefな対をもつ射とその例外素因子が有界になると示す。非正規な例外因子も含まれ、引き戻した因子の対数標準閾値にも一様下限が得られる。
abstract_en: ''
summary_en: |-
  The paper studies how much freedom remains in birational models of projective space when a boundary makes the canonical divisor relatively nef. Its main result uses a uniform discrepancy margin and a bound on the weighted degree downstairs to place these morphisms in bounded families. The boundary coefficients may approach zero, and exceptional divisors are retained with their reduced scheme structures even when they are nonnormal. A second consequence controls the singularities created by pulling back divisors of bounded degree.
abstract_ja: |-
  複素数体上の射影双有理射と有効境界を考え、対が一様にε-lcで、対数標準因子が射の上でnefである場合を調べる。押し出した境界の重み付き次数を抑えるだけで、射そのものと被約な例外素因子の族の有界性を導く。境界の非零係数が零に近づくことを許し、標的上の対の対数標準性も仮定しない。さらに、有界次数の任意の有効因子を引き戻したときの特異性を一様に制御する。これはIntroductionでBirkarに帰せられる有界性予想への回答である。
abstract_source_url: https://arxiv.org/abs/2610.05638v2
license_name: arXiv non-exclusive distribution license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.05638v2](https://arxiv.org/abs/2610.05638v2)
- **著者:** Junpeng Jiao
- **初回投稿日:** 2026-10-05
- **最終更新日:** 2026-10-06
- **主分類・副分類:** math.AG（主分類）、副分類なし
- **ライセンス:** [arXiv non-exclusive distribution license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

標的を射影空間に固定しても、その上の双有理修正の例外因子は複雑になり得る。本論文は、対数標準因子の相対的nef性と特異点の一様な良さが、この複雑さをどこまで抑えるかを問う。境界の台の次数ではなく、係数を含めた押し出しの次数を制御する点が中心にある。

主結果は、次元 $n$、正整数 $k$、$0<\epsilon<1$ を固定すると、$\epsilon$-lcな対 $(X,B)$ を伴い、$K_X+B$ が相対的にnefで、$\deg(f_\ast B)\le k$ を満たす射影双有理射 $f:X\to\mathbf P^n$ が有界になるというものである。例外素因子も、非正規性を許した被約射影スキームとして有界になる。

非零の境界係数に正の下限を仮定しないため、既存の偏極対の有界性定理をそのまま使うことはできない。論文は例外因子の対数食い違いを制御し、乗数イデアルを介して必要な下限を備える補助境界を構成する。さらに、その制御から任意の有界次数の標的因子の引き戻しについて、一様な対数標準閾値を得る。

## 背景と問題設定

境界の正の係数に下限がある場合には、偏極対に対する有界性定理を適用できる。本論文の難所は、その下限を元の $X$ 上で新たに作ることである。$\Delta=f_\ast B$ の重み付き次数は有界でも、係数が小さければその被約な台の次数は有界とは限らない。

Introductionは、BirkarのFano型ファイブレーションとcrepantモデルの有界性との関係を説明する。本論文では $K_X+B$ の相対的nef性まで条件を緩め、$(\mathbf P^n,\Delta)$ がlcでない場合も許す。また、例外因子を正規化してから扱うのではなく、元の被約閉部分スキームの構造を保持する。

## 主結果

### 主定理1：射と例外因子の有界性（Theorem A）

結論は、対象となる射 $f$ が固定した標的 $Y=\mathbf P^n$ 上で有界な族をなし、$f$-例外素因子の被約スキームも有界になることである。仮定は、$X$ が正規かつ整、$B\ge0$ が実境界、$K_X+B$ が実Cartierであり、

<div>
$$
(X,B)\text{ は }\epsilon\text{-lc},\qquad
K_X+B\text{ は }Y\text{ 上でnef},\qquad
\deg(f_*B)\le k
$$
</div>

を満たすことである。$X$ 自体の $\mathbf Q$-Gorenstein性や $\mathbf Q$-factorial性、境界係数の分母、Cartier指数の有界性は別途仮定しない。例外因子の正規性やCartier性も不要である。

$n\ge2$ では、$n,k,\epsilon$ だけによる正の有理数 $\beta$ が存在して、$\Delta=f_\ast B$ に対し $(X,B+\beta f^\ast \Delta)$ が $\epsilon/2$-lcになる。正規化された任意の因子的付値 $v$ について、次の具体的な比較が得られる。

<div>
$$
(1+\beta)A(v,X,B)\ge\beta A(v,Y,0)+\frac{\epsilon}{2}.
$$
</div>

ここで $A$ は対数食い違いである。これは単なる族の存在に加え、標的と修正上の特異性の一様な比較を与える。

### 主定理2：有界次数の因子の引き戻し（Corollary 1.1）

正整数 $\ell$ も固定すると、上のすべての射と、$\deg D\le\ell$ を満たすすべての有効実因子 $D$ に対し、同じ正数 $t$ で

<div>
$$
(X,B+t f^*D)\text{ は }\epsilon/2\text{-lc},\qquad
\operatorname{lct}(X,B;f^*D)\ge t
$$
</div>

が成り立つ。$n\ge2$ なら

<div>
$$
t=\frac{\beta(n,k,\epsilon)}{2(1+\beta(n,k,\epsilon))\ell},
$$
</div>

$n=1$ なら $t=\epsilon/(2\ell)$ とできる。定数が $D$ の係数や被約な台に依存しない点が重要である。

### 主定理3：対数食い違いの明示評価（Theorem B）

$n\ge2$ とし、Introductionの定数を

<div>
$$
\begin{aligned}
a_n&=3(n-1)2^{n-2},& b_n&=3(2^{n-1}-1),\\
C_n&=24^{n-1}12^{3(2^{n-1}-n)},& D_n&=6C_n2^{a_n}3^{b_n}
\end{aligned}
$$
</div>

とおく。Theorem Aの仮定の下で、$X$ 上の各例外素因子 $E$ と任意の正規化された因子的付値 $v$ について、

<div>
$$
\begin{aligned}
A(E,Y,0)&\le C_n2^{b_n}k^{a_n}\epsilon^{-b_n},\\
A(v,X,B)&\ge D_n^{-1}k^{-a_n-1}\epsilon^{b_n+1}A(v,Y,0)
\end{aligned}
$$
</div>

を得る。有界性を支える特異性の制御を、固定パラメータによる式として明示した結果である。

## 証明の見取り図

Introductionによれば、中心となるのは例外因子 $E$ の $A(E,Y,0)$ の次元帰納法による評価である。まず $N\ge0$ を用いて $\Theta=\Delta-N$ を作り、対象の例外因子について $A(E,Y,\Theta)=A(E,X,B)$ を実現する。適切な点からの射影により食い違いを根の差の付値で表し、二つの連接イデアルに置き換える。一方のイデアルの生成次数を $\deg N$ に依存せず抑え、主イデアル化と一般切断を経て次元を一つ下げる。

次に $k$ を $2k$、$\epsilon$ を $\epsilon/2$ に替えた族にも評価を適用し、$B$ に $f^\ast \Delta$ を加えても特異性が保たれる量を下から抑える。乗数イデアルから非零係数に一様な正の下限をもつ境界を作り、一般超平面の引き戻しを加えてBirkarの偏極有界性定理を用いる。

最後に、引き戻した超平面の一つを族の中に保持して $f^\ast \mathcal O_Y(1)$ を記録し、その大域切断の基底から固定した $Y$ への射を回復する。したがって、元の多様体だけでなく射自体の有界性に到達する。

## 原論文との対応

- **確認箇所:** Abstract、Introduction（PDF 1–3頁、Section 2の前まで）。
- **主結果:** Theorem A、Corollary 1.1、Theorem B。定数と不等式はIntroductionの表示式に基づく。
- **証明方針:** Introductionに記された射影・次元帰納法・乗数イデアル・偏極有界性の接続を要約した。後続節の証明の検証は行っていない。
- **確認ライセンス:** arXiv non-exclusive distribution license。
- **source_scope:** Abstract and Introduction。
