---
layout: paper
title: Boij-S"oderberg and Harder-Narasimhan polygons of vector bundles on projective space
title_ja: コホモロジー表が支配するHarder–Narasimhan多角形
authors: Cristian Anghel, Filip Chindea
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.AC
arxiv_abstract: Eisenbud and Schreyer proved that the cohomology table of a vector bundle $F$ on $\mathbb{P}^n$ is a unique positive combination of supernatural tables along a chain of root sequences. The slopes of the pieces, weighted by their ranks, form a concave polygon $Ψ_F$, the Boij-Söderberg polygon, with the same endpoints as the Harder-Narasimhan polygon $P_F$. We prove that $P_F\leqΨ_F$, in any characteristic, by testing subsheaves against sheaves with pure resolutions on thickened lines; the bound is optimal among bounds depending only on the ray of the table. The chain majorizes every other supernatural decomposition, and $Ψ$ is monotone under cancellations, hence upper semicontinuous in flat families. The comparison extends to coherent sheaves and, by linear projection, to sheaves of positive dimension. On $\mathbb{P}^2$ the defect is a sum of four cohomological terms; we characterize equality and show that the inequality survives the large volume limit of Bridgeland stability.
  For a smooth projective variety $X$ of dimension $n\geq2$ in characteristic zero, with $H$ ample and base-point-free, the mean normalized squared spread $G(\mathcal{E})$ of the roots in the cohomology table of every vector bundle $\mathcal{E}$ satisfies $G(\mathcal{E})\geq(K_X^2-2c_2(X))\cdot H^{n-2}/((n+1)H^n)$, a bound independent of $\mathcal{E}$. Since $G(\mathcal{E})=1$ exactly for arithmetically Cohen-Macaulay bundles, when this bound exceeds $1$ it is a uniform form of their absence.
topic: algebraic-geometry
tags:
- vector-bundles-sheaves
- stability
- chern-classes
arxiv_id: 2611.15790v2
arxiv_url: https://arxiv.org/abs/2611.15790
arxiv_submitted: '2026-11-11'
arxiv_updated: '2026-11-16'
summary: 射影空間上の束のコホモロジー表からBoij–Söderberg多角形を定義し、それがHarder–Narasimhan多角形を上から抑えることを示す。部分層の次数の制約をコホモロジー情報だけから取り出し、拡大・特殊化・偏極多様体上の中間コホモロジーの下限へ応用する。
abstract_en: Eisenbud and Schreyer proved that the cohomology table of a vector bundle $F$ on $\mathbb{P}^n$ is a unique positive combination of supernatural tables along a chain of root sequences. The slopes of the pieces, weighted by their ranks, form a concave polygon $Ψ_F$, the Boij-Söderberg polygon, with the same endpoints as the Harder-Narasimhan polygon $P_F$. We prove that $P_F\leqΨ_F$, in any characteristic, by testing subsheaves against sheaves with pure resolutions on thickened lines; the bound is optimal among bounds depending only on the ray of the table. The chain majorizes every other supernatural decomposition, and $Ψ$ is monotone under cancellations, hence upper semicontinuous in flat families. The comparison extends to coherent sheaves and, by linear projection, to sheaves of positive dimension. On $\mathbb{P}^2$ the defect is a sum of four cohomological terms; we characterize equality and show that the inequality survives the large volume limit of Bridgeland stability.
  For a smooth projective variety $X$ of dimension $n\geq2$ in characteristic zero, with $H$ ample and base-point-free, the mean normalized squared spread $G(\mathcal{E})$ of the roots in the cohomology table of every vector bundle $\mathcal{E}$ satisfies $G(\mathcal{E})\geq(K_X^2-2c_2(X))\cdot H^{n-2}/((n+1)H^n)$, a bound independent of $\mathcal{E}$. Since $G(\mathcal{E})=1$ exactly for arithmetically Cohen-Macaulay bundles, when this bound exceeds $1$ it is a uniform form of their absence.
summary_en: ''
abstract_ja: 束のコホモロジーの数値データが、その不安定性をどこまで制約するかを扱う。supernaturalな表への鎖分解から作る多角形によって、任意の部分層の階数と次数を抑え、一般のHarder–Narasimhan構造と比較する。射影平面では等号条件やBridgeland安定性との関係が明確になり、一般の偏極多様体ではaCM束の非存在を定量的なコホモロジー下限へ強める。
abstract_source_url: https://arxiv.org/abs/2611.15790
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.15790v2](https://arxiv.org/abs/2611.15790)
- **著者:** Cristian Anghel, Filip Chindea
- **初回投稿日:** 2026-11-11
- **最終更新日:** 2026-11-16
- **主分類・副分類:** math.AG（主分類）; math.AC
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

ベクトル束のコホモロジー表は、すべての捻りにおける各コホモロジー群の次元を記録する。一方、Harder–Narasimhan多角形は部分層の傾きから不安定性を測る。両者は異なる情報に見えるが、本論文は前者だけで後者を一様に上から抑える多角形を構成する。

Boij–Söderberg理論によるsupernaturalな表への鎖分解を用い、各成分の階数と傾きを辺とする多角形を作る。主要な比較定理は、任意の部分層の階数・次数がこの多角形の下に位置するというものである。supernaturalな表を持つ束が半安定になるという既知の特別な場合を、一般の鎖へ拡張する。

この比較は拡大や平坦族の特殊化と整合する。射影平面では三つのコホモロジー次元による具体的評価と等号の特徴づけが得られ、偏極多様体ではChern数に由来する不等式から、中間コホモロジーを消せない度合いを定量化する。

## 背景と問題設定

$\mathbb P^n$ 上の束 $F$ の表を $\gamma(F)=\sum\_kq\_k\gamma^{z\_k}$ と鎖分解する。根列 $z=(z\_1>\cdots>z\_n)$ に対し、中心と傾きは

$$
c(z)=\frac1n\sum\_jz\_j,\qquad
\mu(z)=-c(z)-\frac{n+1}{2}
$$

である。階数 $n!$ に正規化した各supernatural表から、横幅 $n!q\_k$、傾き $\mu(z\_k)$ の辺を並べて凹多角形 $\Psi\_F$ を作る。端点は $(0,0)$ と $(\operatorname{rk}F,\deg F)$ である。$P\_F$ は通常のHarder–Narasimhan多角形を表す。

## 主結果

### 部分層と多角形の比較（Theorem A）

任意の代数閉体上で

$$
P\_F\le\Psi\_F,\qquad
\deg F'\le\Psi\_F(\operatorname{rk}F')\quad(F'\subset F)
$$

が成り立つ。したがってコホモロジー表から、実際に存在し得る部分層の不安定性の上限を読める。単一のsupernaturalな表の場合には半安定性が従うが、著者らが強調する新規性は任意の鎖に対する比較にある。

### 鎖分解の極値性（Theorem B）

同じ表をsupernatural表の別の正の組合せで書いた場合と比べ、鎖分解の中心分布はmajorizationの意味で最大になる。これにより、鎖から定義した多角形が単なる任意の分解に依存する選択でなく、極値的な対象であることが分かる。

### 拡大と特殊化（Theorem C）

二つの表の差が相殺ベクトルの非負結合なら、そのBoij–Söderberg多角形は同じ向きに比較される。特に束の完全列に対して

$$
0\to F'\to F\to F''\to0
\quad\Longrightarrow\quad
\Psi\_F\le\Psi\_{F'\oplus F''}
$$

となり、平坦族では一般のファイバーの多角形が特殊ファイバーのもの以下になる。次元3以上では、表の各成分の大小とHilbert多項式の一致だけでは十分でない。

### 射影平面の具体的評価（Theorem D）

$\Lambda\_F(\lambda)=\sum\_k2q\_k(\mu(z\_k)-\lambda)\_+$ と置く。$\lambda\in\frac12\mathbb Z$、整数 $a>b$ が $a+b=-2\lambda-3$ を満たすとき、

$$
(a-b)\Lambda\_F(\lambda)
\le h^0(F(a))-h^0(F(b))+h^1(F(b))
$$

が成り立つ。$(a,b)$ が鎖の全要素と比較可能なら等号で、そのような組は各 $\lambda$ に存在する。Introductionは差を部分層・商層のコホモロジーと連結準同型の階数からなる非負項で記述することを説明する。さらに $P\_F=\Psi\_F$ は、HN因子がsupernaturalで根列が互いに比較可能であることと同値になる。

### Bridgeland安定性との比較（Theorem E）

複素射影平面上で $\beta<\mu\_{\min}(F)$ を固定し、$\alpha\gg0$ とする。安定性条件 $\sigma\_{\alpha,\beta}$ のHN多角形が囲む領域は、鎖の各成分の中心電荷から作る領域 $\Psi\_F^\sigma$ に含まれる。これは大体積極限の近傍の結果であり、小さい $\alpha$ を含む全域で同じ包含が既に証明されたわけではない。

### 低次元台を持つ層への拡張（Theorem F）

$\mathbb P^N$ 上の次元 $n\ge1$ の連接層について、Hilbert多項式を

$$
\chi(F(t))=\sum\_i(-1)^ie\_i(F)\binom{t+n-i}{n-i}
$$

と書く。下限公式によって定義した多角形に対し、任意の部分層で

$$
-e\_1(F')\le\Psi\_F(e\_0(F'))
$$

が成立する。純層なら傾き $-e\_1/e\_0$ のHN多角形が下に位置する。一般の有限線形射影が表とこれらの係数を保つことを使う。

### 偏極多様体のコホモロジー下限（Theorem G）

標数0で、滑らかな射影多様体 $X$ の次元を $n\ge2$、$H$ を豊富かつ基点のない因子とし、

$$
d=H^n,\qquad
\tau=\frac{(K\_X^2-2c\_2(X))\cdot H^{n-2}}{n+1}
$$

と置く。有限射影による表の根列の隔たりから定めるgap moment $G(E)$ は $G(E)\ge1$ で、等号は $E$ がaCMであることに対応する。任意の階数 $r$ の束について、さらに

$$
G(E)\ge\frac\tau d,\qquad
\sum\_{0<j<n}\sum\_t h^j(E(tH))\ge C\_nr(\tau-d)\_+
$$

が成り立つ。ここで

$$
C\_n=\frac{n(\lfloor n/2\rfloor-1)!(\lceil n/2\rceil-1)!}{12(n-2)!},
\qquad C\_2=\frac16
$$

である。特に $\tau>d$ ならaCM束が存在しないだけでなく、中間コホモロジー総量の正の下限がある。

## 証明の見取り図

一般次元の比較には、厚みを持つ直線上の試験層と純粋分解を用いて、部分層の単射がコホモロジーにもたらす制約を取り出す。射影平面ではコホモロジー長完全列と相殺の階数を直接追えるが、次元3では表だけを形式的に比較する議論では不足する。

偏極多様体への応用では有限射影で射影空間の比較へ帰着し、Riemann–Roch公式、HN因子のBogomolov不等式、Hodge指数定理を組み合わせる。従って、任意標数で成り立つ基本比較と、標数0の曲率・判別式不等式を使う応用は仮定が異なる。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.15790)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.15790v2) — Section 1, Introduction, pp. 1–7
- **Introduction中で言及された主要結果:** Theorems A–G
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.15790v2
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
