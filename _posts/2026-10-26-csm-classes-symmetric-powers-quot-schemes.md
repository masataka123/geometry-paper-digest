---
layout: paper
title: Chern-Schwartz-MacPherson classes of symmetric powers and applications
title_ja: 対称冪とQuotスキームのCSM類およびMNOP公式のChow群への精密化
authors: Barbara Fantechi, Lothar Goettsche
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: The Chern-Schwartz-MacPherson class $c_{SM}(X)$ is defined in the Chow group $A_*(X)$ of a scheme $X$, and generalizes $c(T_X)\cap [X]$ if $X$ is smooth. In this paper we independently compute $c_{SM}(S^nX)\in A_*(S^nX)$ modulo $n!$ torsion; we use this result to compute the pushforward to $S^nX$ of $c_{SM}(Quot^n_X(E))$ (and in particular $c_{SM}(Hilb^n X)$) when $X$ is smooth and $E$ is a vector bundle on $X$. Finally, when $X$ is smooth and complete of dimension $3$ we propose a refined version of the the MNOP conjecture that computes the image of the pushforward of $[Hilb^n X]^{vir}$ to $A_0(S^nX)$ and prove it modulo $n!$ torsion when $X$ is Calabi-Yau.
topic: algebraic-geometry
tags:
- chern-classes
- algebraic-cycles-enumerative
- moduli
- calabi-yau-geometry
arxiv_id: 2610.31826v1
arxiv_url: https://arxiv.org/abs/2610.31826
arxiv_submitted: '2026-10-22'
arxiv_updated: '2026-10-22'
summary: 対称冪、点のHilbertスキーム、QuotスキームのChern–Schwartz–MacPherson類を、対称冪のChow群で母関数として計算する。次数ごとの階乗torsionを除くという精度を明示し、零次元Donaldson–Thomas不変量のMNOP公式をサイクル類として精密化する予想とCalabi–Yauの場合の結果を示す。
abstract_en: ''
summary_en: Numerical generating functions forget the location of cycles when they take degrees. This paper retains cycle information by working on symmetric powers and defining exponential operations on Chow groups. It computes Chern–Schwartz–MacPherson classes of symmetric powers and pushforwards from Hilbert and Quot schemes, with factorial torsion explicitly accounted for. It also formulates a cycle-level refinement of the MNOP formula and proves the stated torsion-qualified version for Calabi–Yau threefolds.
abstract_ja: Euler標数などの数値的母関数を、対称冪上のChow類を値とする母関数へ持ち上げる。サイクルの指数写像を構成し、対称冪のCSM類と、滑らかな多様体上の点のHilbertスキーム・QuotスキームのCSM類の押し出しを計算する。第n係数ではn!で消えるtorsionを除いた等式となる。滑らかな射影三次元多様体のMNOP公式についてもChow群における精密化を提案し、Calabi–Yauの場合に同じtorsion付きの範囲で証明する。
abstract_source_url: https://arxiv.org/abs/2610.31826
license_name: Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
license_url: http://creativecommons.org/licenses/by-nc-nd/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2610.31826v1](https://arxiv.org/abs/2610.31826)
- **著者:** Barbara Fantechi, Lothar Goettsche
- **初回投稿日:** 2026-10-22
- **最終更新日:** 2026-10-22
- **主分類・副分類:** math.AG（主分類）; 副分類なし
- **ライセンス:** [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](http://creativecommons.org/licenses/by-nc-nd/4.0/)

## 要約

数え上げ幾何の多くの不変量は、零次元Chow類の次数として得られる。次数を取ると数値として扱いやすくなる一方、サイクルがどこに存在するかという情報は失われる。本論文は、Euler標数やDonaldson–Thomas不変量の母関数を、サイクル類そのものの母関数へ精密化する。

計算の共通の受け皿は $X$ の対称冪 $S^nX$ である。Hilbert–Chow射やQuot–Chow射でCSM類をここへ押し出し、サイクルを指数に持つ母関数として表す。一般の場合には第 $n$ 係数の $n!$-torsionを除いて等式を得るという精度を明示する。

さらにMNOP公式のChow群版を予想し、Calabi–Yau三次元多様体の場合に階乗torsionを除く形で証明する。Introductionは既存の有理係数の特性類公式との重なりを説明し、独立した方法による構成とChow群での精度を本論文の特徴として位置づける。

## 背景と問題設定

Chern–Schwartz–MacPherson類 $c\_{\mathrm{SM}}(X)\in A\_\ast (X)$ は、滑らかな場合の $c(T\_X)\cap[X]$ を特異なスキームへ拡張する。固有な $X$ ではその零次元成分の次数がEuler標数になる。論文は零次元成分自体をChow Euler類 $\mathbf e(X)=c\_{\mathrm{SM}}(X)\_0$ として扱う。

$SX=\sum\_{n\ge0}S^nX\thinspace t^n$ という形式的なスキームの母関数を考え、点のサイクルの加法 $S^aX\times S^bX\to S^{a+b}X$ からそのChow群の積を作る。指数写像 $\operatorname{Exp}$ と重複写像 $\delta\_m$ によって、通常の整数冪ではない「Chow類を指数とする冪」 $f^\alpha$ を定義する。以下の公式の右辺はこの意味で読む。

## 主結果

### 対称冪のCSM類

対称冪のCSM類の母関数は

$$
\sum\_{n\ge0}c\_{\mathrm{SM}}(S^nX)t^n=(1-t)^{-c\_{\mathrm{SM}}(X)}\in A'\_\ast (SX)
$$

と表される。$A\_\ast (SX)\to A'\_\ast (SX)$ の核は第 $n$ 係数の $n!$-torsionである。従って、この式を整数係数Chow群でtorsionまで含めた無条件の等式と解釈してはならない。

射影的 $X$ の零次元成分については、Chow版MacDonald公式 $\mathbf e(SX)=(1-t)^{-\mathbf e(X)}$ を同じ精度で得る。完全な整数係数での成立は一般には予想とされ、完備な被約既約曲線については証明される。

### Hilbertスキーム・Quotスキームへの応用

$X$ を滑らかな $d$ 次元多様体、$E$ を階数 $r$ のベクトル束、$\rho\_n$ をQuot–Chow射とする。$P\_d(t)$ を $(d-1)$ 次元分割の母関数とすると、

$$
\sum\_{n\ge0}\rho\_{n\ast }c\_{\mathrm{SM}}(\operatorname{Quot}\_X^n(E))t^n
=\bigl(P\_d(t)^r\bigr)^{c\_{\mathrm{SM}}(X)}
$$

が $A'\_\ast (SX)$ で成り立つ。点のHilbertスキームの場合は右辺が $P\_d(t)^{c\_{\mathrm{SM}}(X)}$ となる。具体的に

$$
P\_1(t)=(1-t)^{-1},\qquad P\_2(t)=\prod\_{k>0}(1-t^k)^{-1},\qquad
P\_3(t)=M(t)=\prod\_{k>0}(1-t^k)^{-k}
$$

であり、$M(t)$ はMacMahon関数である。

### Chow MNOP予想とCalabi–Yauの場合

滑らかな射影三次元多様体の零次元Donaldson–Thomas理論について、仮想基本類を対称冪へ押し出した母関数の予想は、論文のChow冪の記法で

$$
\sum\_{n\ge0}\rho\_{n\ast }[\operatorname{Hilb}^n(X)]^{\mathrm{vir}}t^n
=M(-t)^{c\_3(T\_X\otimes K\_X)\cap[X]}
$$

と表せる。ここでは共通のChow群を明確にするため、Introductionで省略される押し出しを左辺に明記した。次数を取った数値的MNOP公式より強い主張である。著者らは一般の滑らかな射影三次元多様体では予想として提示し、Calabi–Yauの場合に $n!$-torsionを除いて証明する。

## 証明の見取り図

Introductionは、基本的な指数写像 $\exp([V])=\sum\_{n\ge0}[S^nV]t^n$ を加法から積へ移すよう拡張し、それが有理同値と固有押し出しに適合することを示す方針を説明する。より一般のCSM類にはmotivicな指数写像を導入し、零次元では基本的な指数写像と一致させる。この仕組みにより、数値的な母関数の指数をChow類へ置き換える操作に意味を与える。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2610.31826)
- **Introduction:** [PDF](https://arxiv.org/pdf/2610.31826v1) — Section 1, pp. 2–6（Section 2の前まで）
- **Introduction中で言及された主要結果:** Introduction 1.3–1.5の指数写像、対称冪・Quotの母関数、Chow MNOP予想（導入では番号なし）
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2610.31826v1
- **確認したライセンス:** [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](http://creativecommons.org/licenses/by-nc-nd/4.0/)
- **source\_scope:** Abstract and Introduction
