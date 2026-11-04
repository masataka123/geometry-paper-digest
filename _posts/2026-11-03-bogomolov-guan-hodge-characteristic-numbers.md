---
layout: paper
title: Hodge theory and topology of Bogomolov--Guan manifolds
title_ja: Bogomolov–Guan多様体のHodge理論と特性数
authors: Nikon Kurnosov, Ángel David Ríos Ortiz
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
- math.CV
arxiv_abstract: Bogomolov--Guan manifolds are simply connected, irreducible holomorphic symplectic manifolds that are not K\"ahler, yet they echo hyperk\"ahler geometry in striking ways. We show that their Fr\"olicher spectral sequence degenerates at $E_1$ and that their Hodge numbers are stable under small deformations. The general fibers of their natural Lagrangian fibration are rationally null-homologous, and the Beauville--Bogomolov--Fujiki form is degenerate. Despite this, in every dimension, the Euler characteristics agree with those of generalized Kummer manifolds. In dimensions four and six, we compute the full Hodge diamonds and all Chern and Pontryagin numbers. Surprisingly, these characteristic numbers are the same as the generalized Kummer ones, even though the Betti numbers differ and the Hodge diamonds are asymmetric.
topic: algebraic-geometry
tags:
- chern-classes
- hodge-theory
- symplectic-contact-geometry
arxiv_id: 2611.01210v1
arxiv_url: https://arxiv.org/abs/2611.01210
arxiv_submitted: '2026-10-31'
arxiv_updated: '2026-10-31'
summary: 非KählerなBogomolov–Guan多様体で、Hodge理論と交点形式がどのように共存するかを調べる。標準例のFrölicherスペクトル系列の退化とBBF形式の退化方向を記述し、複素次元4・6では一般化Kummer多様体とのChern数の一致を示す。
abstract_en: Bogomolov--Guan manifolds are simply connected, irreducible holomorphic symplectic manifolds that are not K\"ahler, yet they echo hyperk\"ahler geometry in striking ways. We show that their Fr\"olicher spectral sequence degenerates at $E_1$ and that their Hodge numbers are stable under small deformations. The general fibers of their natural Lagrangian fibration are rationally null-homologous, and the Beauville--Bogomolov--Fujiki form is degenerate. Despite this, in every dimension, the Euler characteristics agree with those of generalized Kummer manifolds. In dimensions four and six, we compute the full Hodge diamonds and all Chern and Pontryagin numbers. Surprisingly, these characteristic numbers are the same as the generalized Kummer ones, even though the Betti numbers differ and the Hodge diamonds are asymmetric.
summary_en: ''
abstract_ja: Bogomolov–Guanの標準多様体とその小変形ではFrölicherスペクトル系列が最初の頁で退化し、Hodge数が局所的に一定となる。他方、自然なLagrangeファイブレーションの一般ファイバーは有理ホモロジーで零となり、底の超平面類の引き戻しがBBF形式の根基を生成する。任意の次元でEuler標数は一般化Kummer多様体と一致し、複素次元4と6ではChern数・Pontryagin数も一致する。これはBetti数やHodge対称性まで一致するという主張ではない。
abstract_source_url: https://arxiv.org/abs/2611.01210
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2611.01210v1](https://arxiv.org/abs/2611.01210)
- **著者:** Nikon Kurnosov, Ángel David Ríos Ortiz
- **初回投稿日:** 2026-10-31
- **最終更新日:** 2026-10-31
- **主分類・副分類:** math.AG（主分類）; math.CV
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

Bogomolov–Guan多様体は、単連結で正則シンプレクティック形式を持ちながらKählerではないコンパクト複素多様体である。本論文は、超Kähler多様体で結びついているHodge理論、2次コホモロジーの二次形式、Lagrangeファイバーの位相が、この非Kählerな設定でどう分かれるかを調べる。

標準例ではFrölicherスペクトル系列の第1頁退化が成り立つ一方、Hodge対称性やformalityは成り立たない。自然なファイブレーションの超平面類は非零だが、その平方は零であり、BBF形式の根基を生成する。この一つの類が複数の非Kähler的現象を結びつける。

さらにEuler標数と低次元の特性数を計算する。複素次元4・6で一般化Kummer多様体と同じChern数を持つことは、両者のコホモロジーの違いを消すものではない。全次元のすべての特性数の一致は予想として残される。

## 背景と問題設定

標準代表を $Q\_{n,t}$ と書き、複素次元は $2n$、$n\geq2$、$t\in\mathbb Z\setminus\lbrace 0\rbrace $ とする。これに変形同値な多様体をBG型と呼ぶ。標準例は自然な射 $\ell:Q\_{n,t}\to\mathbb P^n$ を持つ。

超Kählerの場合、底の超平面類の引き戻し $h$ は $h^n\ne0$ を満たし、一般ファイバーの類を与える。本論文の標準例では $h\ne0$ にもかかわらず $h^2=0$ となる。非formalityと $b\_3=3$ は序論が引用する先行研究の結果であり、新しい主張と区別する。

## 主結果

### Hodge理論の安定性（Theorem A）

すべての標準例 $Q\_{n,t}$ についてFrölicherスペクトル系列は $E\_1$ で退化する。十分小さい変形でも同じことが成り立ち、Hodge数はそこで局所一定である。これは変形同値類全体で個々のHodge数が一定だとする主張ではない。

第1頁退化はHodge対称性を含意しない。例えば標準4次元例では $h^{2,1}=1$、$h^{1,2}=2$ である。序論は標準束の自明性と合わせてKuranishi空間の滑らかさも得ると説明する。

### ファイブレーションとBBF形式（Theorem B）

$Q=Q\_{n,t}$ から正規射影多様体 $B$ への、連結ファイバーを持つ非定値全射正則写像 $g$ は、唯一の同型 $\psi:\mathbb P^n\to B$ により $g=\psi\circ\ell$ と書ける。この同一視で

$$
h=g^\ast c\_1(\mathcal O\_{\mathbb P^n}(1))\ne0,\qquad h^2=0
$$

となる。一般ファイバーと、一般の余次元2線形部分空間の逆像は有理ホモロジーで零となり、$Q$ はFujikiのクラスCに属さない。

$h$ はBBF形式の根基を生成し、その実慣性指数は、正・負・零の方向の順に $(2,3,1)$ である。さらに $H^2(Q,\mathbb C)$ の任意の類は一般ファイバーへ制限すると零となる。既知の根基の存在に対し、本論文はその生成元を幾何学的に特定する。

### Euler標数と低次元のChern数（Theorem C）

任意のBG型多様体 $X$ に対して

$$
e(X)=(n+1)^3\sigma\_1(n+1),\qquad \chi(\mathcal O\_X)=n+1,
\qquad \sigma\_1(m)=\sum\_{d\mid m}d
$$

が成り立つ。非零Chern数は、複素次元4と6でそれぞれ

$$
\mathrm{BG}\_2:\quad c\_2^2=756,\quad c\_4=108,
$$

$$
\mathrm{BG}\_3:\quad c\_2^3=30208,\quad c\_2c\_4=6784,\quad c\_6=448
$$

である。これらは対応する変形類全体で成り立ち、一般化Kummer型と同じChern数・Pontryagin数およびユニタリコボルディズム類を与える。ただし $b\_2$ はBG型で6、一般化Kummer型で7である。全次元の特性数の一致はConjecture 10.1の内容である。

## 証明の見取り図

Guan構成の射影的半小解消に分解定理を適用し、de Rham・Dolbeaultコホモロジーを分割で添字付けられた部分へ分ける。各部分では不変微分形式が両コホモロジーを計算し、全次数を保つ比較から第1頁退化を得る。

ファイブレーション類の平方消滅は、楕円曲線上の異なる点に対応する互いに交わらない因子の類を比較して導く。Fujiki関係がその類を二次形式の根基に入れる。低次元ではHodge数の計算とHirzebruch–Riemann–Rochを組み合わせて特性数を決定する。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/2611.01210)
- **Introduction:** [PDF](https://arxiv.org/pdf/2611.01210v1) — Section 1, pp. 2–7
- **Introduction中で言及された主要結果:** Theorems A, B, C; Conjecture 10.1への言及
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2611.01210v1
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
