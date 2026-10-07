---
layout: paper
title: Algebraic ellipticity of quartic double spaces
title_ja: 四次二重被覆空間の代数的楕円性
authors: Alexander Dvorsky, Shulim Kaliman, Mikhail Zaidenberg
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: |-
  We prove that every smooth quartic double $n$-fold, $n\ge2$, over an algebraically closed field of characteristic zero is algebraically elliptic in Gromov's sense. In particular, every smooth quartic double solid is algebraically elliptic, which answers Question~4.28 in [M. Zaidenberg, Algebraic Gromov ellipticity: a brief survey, Taiwanese J. Math. 29 (2025), no. 6, 1681-1705]. We also prove that removing any closed subset of codimension at least two preserves algebraic ellipticity for smooth quartic double spaces and smooth cubic hypersurfaces of dimension at least two.
topic: algebraic-geometry
tags:
- oka-theory
- birational-geometry
arxiv_id: 2610.07260v1
arxiv_url: https://arxiv.org/abs/2610.07260v1
arxiv_submitted: '2026-10-05'
arxiv_updated: '2026-10-05'
summary: |-
  滑らかな四次超曲面で分岐する射影空間の二重被覆が、Gromovの意味で代数的楕円的になることを示す。標数0の代数閉体上で次元2以上を扱い、安定有理でない滑らかな射影多様体にも楕円性が現れる。余次元2以上の閉集合を除いても、四次二重被覆と滑らかな三次超曲面では楕円性が保たれる。
abstract_en: |-
  We prove that every smooth quartic double $n$-fold, $n\ge2$, over an algebraically closed field of characteristic zero is algebraically elliptic in Gromov's sense. In particular, every smooth quartic double solid is algebraically elliptic, which answers Question~4.28 in [M. Zaidenberg, Algebraic Gromov ellipticity: a brief survey, Taiwanese J. Math. 29 (2025), no. 6, 1681-1705]. We also prove that removing any closed subset of codimension at least two preserves algebraic ellipticity for smooth quartic double spaces and smooth cubic hypersurfaces of dimension at least two.
summary_en: ''
abstract_ja: |-
  標数0の代数閉体上で、次元2以上の滑らかな四次二重被覆空間が支配的な代数的sprayをもつことを証明する。特に四次二重ソリッドの代数的楕円性に関する既存の問いに答える。さらに、これらの空間と次元2以上の滑らかな三次超曲面から任意の余次元2以上の閉集合を除いても、代数的楕円性が残ることを示す。証明は動く双有理対合の族を利用する。
abstract_source_url: https://arxiv.org/abs/2610.07260v1
license_name: CC BY 4.0
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.07260v1](https://arxiv.org/abs/2610.07260v1)
- **著者:** Alexander Dvorsky, Shulim Kaliman, Mikhail Zaidenberg
- **初回投稿日:** 2026-10-05
- **最終更新日:** 2026-10-05
- **主分類・副分類:** math.AG（主分類）、副分類なし
- **ライセンス:** [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)

## 要約

代数的楕円性は、各点のすべての接方向を代数的に動かせるsprayが存在するという柔軟性の条件である。本論文は、射影空間を滑らかな四次超曲面に沿って二重被覆した多様体について、この性質を証明する。

主定理は標数0の代数閉体上、すべての次元 $n\ge2$ で成り立つ。特に三次元の四次二重ソリッドに関する既存の問いへ肯定的に答える。また、既知の安定非有理性と組み合わせ、代数的楕円的であっても安定有理でない滑らかな射影多様体の例を得る。

証明は、点をパラメータとして動く双有理対合を利用する。四次二重被覆では直線の逆像に現れる楕円曲線上の群法則から対合を作り、それをsprayへ結び付ける。同じ構成を精密化すると、余次元2以上の閉集合を取り除いた開多様体でも楕円性を保てる。

## 背景と問題設定

滑らかな代数多様体 $X$ 上の代数的sprayは、ベクトル束 $\rho:E\to X$ と射 $s:E\to X$ で、零切断上では $s$ が $\rho$ と一致するものをいう。各点 $x$ でファイバー方向の微分

<div>
$$
d(s|_{E_x})_{0_x}:T_{0_x}E_x\longrightarrow T_xX
$$
</div>

が全射なら支配的であり、そのようなsprayをもつ $X$ がGromovの意味で代数的楕円的である。「楕円的」はここではsprayによる柔軟性を指し、楕円曲線であるという意味ではない。

滑らかな完備有理多様体や滑らかな三次超曲面については既知の楕円性定理がある。一方、非有理あるいは安定非有理な多様体でもどこまで楕円性が残るかが問題となる。本論文は、滑らかな四次式 $F$ を用いて重み付き射影空間 $\mathbf P(1^{n+1},2)$ 内で

<div>
$$
w^2=F(x_0,\ldots,x_n)
$$
</div>

と表される二重被覆 $\pi:X\to\mathbf P^n$ を扱う。

## 主結果

### 主定理1：滑らかな四次二重被覆の楕円性（Theorem 1.1）

標数0の代数閉体 $k$ 上で、$n\ge2$ の任意の滑らかな四次二重 $n$ 次元多様体は代数的楕円的である。特に $n=3$ は、Introductionに挙げられた四次二重ソリッドに関するQuestion 4.28への回答である。

滑らかであることと四次の滑らかな分岐因子をもつ二重被覆であることが仮定に含まれる。一般の特異な二重被覆へそのまま結論を広げる主張ではない。

### 帰結1：安定非有理な楕円的多様体（Corollary 1.2）

複素数体上で $n=3,4$ の非常に一般の滑らかな四次二重 $n$ 次元多様体は、代数的楕円的であり、安定有理ではない。楕円性は本論文の定理から、安定非有理性はVoisinおよびHassett–Pirutka–Tschinkelの既存結果から得られる。

Introductionは、これを安定有理でない滑らかな射影楕円的多様体の最初の例として位置付ける。安定非有理性そのものを本論文が新しく証明するという意味ではない。

### 帰結2：頂点を除いたアフィン錐（Corollary 1.3）

$L$ を $X$ 上の豊富な直線束とし、

<div>
$$
Y=\operatorname{Spec}\!\left(\bigoplus_{m\ge0}H^0(X,L^{\otimes m})\right)
\setminus\lbrace\text{vertex}\rbrace
\cong(L^{-1})^\times
$$
</div>

とおく。ここで $\times$ は零切断を除くことを表す。この $Y$ も代数的楕円的になる。

さらに、$\mathbf A^{n+1}\to X$ と $\mathbf A^{n+2}\to Y$ という全射が存在し、適切な開部分への制限も滑らかかつ全射となる。$k=\mathbf C$ なら $X$ へは $\mathbf A^n$ から同様の全射が得られる。また自己準同型のモノイド $\operatorname{End}(Y)$ は、すべての自然数 $m$ について $m$ 重推移的に作用する。

### 主定理2：余次元2以上の集合の除去（Theorem 1.4）

$X$ が滑らかな四次二重 $n$ 次元多様体、または $\mathbf P^{n+1}$ の滑らかな三次超曲面で、$n\ge2$ とする。任意の余次元2以上の閉集合 $Z\subset X$ に対し、

<div>
$$
X\setminus Z\text{ は代数的楕円的}
$$
</div>

となる。射影多様体の楕円性に加え、穴を開けた非完備な多様体の柔軟性を示す結果である。余次元1の因子を除いた場合を一般に主張するものではない。

## 証明の見取り図

Introductionは、滑らかな完備単有理多様体上の動く双有理対合の族を基本原理として挙げる。$p$ を固定すると $x\mapsto i_p(x)$ が対合であり、$x$ を固定して $p$ を動かすと $p\mapsto i_p(x)$ が支配的になる、という二つの性質を使って代数的楕円性を得る。

三次超曲面では、$p,x$ を通る直線との第三交点を使う古典的な対合がある。四次二重被覆では、一般の直線 $\ell\subset\mathbf P^n$ の逆像 $E_\ell=\pi^{-1}(\ell)$ が滑らかな楕円曲線になることを使う。被覆対合を $\sigma$ とすると、群法則により

<div>
$$
i_p(x)=2\sigma(p)-x,\qquad p,x\in E_\ell
$$
</div>

と定められる。この式は原点の選択に依存せず、$\sigma(p)$ を原点に取れば $x\mapsto-x$ になる。固定した $x$ に対して $p$ を動かす写像は次数4で支配的となり、$x$ が分岐に対応するramification因子上にある場合も成立する。

除去定理では同じ動く族を使い、reflection mapの点の逆像の次元を高々 $n$ と評価する。その結果、sprayを作る完全なパラメータ直線を $Z$ に当たらないよう選べる。ここではIntroductionに記載された仕組みを説明し、後続節でのsprayの貼り合わせや次元評価の証明自体は検証していない。

## 原論文との対応

- **確認箇所:** Abstract、Introduction（PDF 1–3頁、Section 2の前まで）。
- **主結果:** Theorems 1.1、1.4、Corollaries 1.2、1.3。
- **証明方針:** 動く対合の条件と楕円曲線上の式はIntroductionに基づく。安定非有理性の既存結果と本論文の楕円性の結果を区別した。
- **確認ライセンス:** CC BY 4.0。
- **source_scope:** Abstract and Introduction。
