---
layout: paper
title: Hyperkähler SYZ conjecture
title_ja: Hyperkähler SYZ予想とnef線束の半豊富性
authors: Philip Engel, Mirko Mauri
arxiv_primary_category: math.AG
arxiv_categories:
- math.AG
arxiv_abstract: 'We prove the hyperk\"ahler SYZ conjecture: the sections of some power of a non-trivial nef isotropic line bundle define a Lagrangian fibration.'
topic: algebraic-geometry
tags:
- hyperkahler-geometry
- positivity
- calabi-yau-geometry
- moduli
arxiv_id: 2610.12277v1
arxiv_url: https://arxiv.org/abs/2610.12277
arxiv_submitted: '2026-10-08'
arxiv_updated: '2026-10-08'
summary: コンパクト既約hyperkähler多様体のnef線束は半豊富であると主張し、非自明な等方的線束からLagrangianファイブレーションを得る。metric SYZの結果で構成されるspecial Lagrangianトーラスを、退化に由来するコホモロジー類の条件を使って正則トーラスへ回転させることが鍵となる。
abstract_en: 'We prove the hyperk\"ahler SYZ conjecture: the sections of some power of a non-trivial nef isotropic line bundle define a Lagrangian fibration.'
summary_en: ''
abstract_ja: 本論文はhyperkähler SYZ予想を証明するとし、コンパクト既約hyperkähler多様体上のnef線束が半豊富であることを主定理に掲げる。Beauville–Bogomolov–Fujiki形式に関して等方的な非自明線束では、正の冪の切断がLagrangianファイブレーションを定める。metric SYZ予想の既知の成果とhyperkähler回転を組み合わせ、トーラスを正則なファイバーへ変換して半豊富性へ到達する。
abstract_source_url: https://arxiv.org/abs/2610.12277
license_name: CC BY 4.0
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **原題:** Hyperkähler SYZ conjecture
- **著者:** Philip Engel, Mirko Mauri
- **arXiv:** [2610.12277v1](https://arxiv.org/abs/2610.12277)
- **初回投稿日 / 更新日:** 2026-10-08 / 2026-10-08
- **主分類:** math.AG
- **ライセンス:** [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)。著作権は原著者等の権利者に帰属する。

## 要約

nef線束は曲線との交差が非負であっても、その正の冪に十分な切断があるとは限らない。hyperkähler多様体では、この数値的正値性から半豊富性へ進む問題が、Lagrangianファイブレーションの存在と結び付く。

本論文はコンパクト既約hyperkähler多様体のnef線束は半豊富であると主張する。特にBeauville–Bogomolov–Fujiki形式で平方0となる非自明な線束について、正の冪の切断からファイブレーションを作るhyperkähler SYZ予想を扱う。

Introductionの証明方針は、metric SYZの結果が与えるspecial Lagrangianトーラスをhyperkähler回転で正則トーラスへ移すことである。高次元では回転だけで正則性が自動的に従うわけではなく、トーラスのコホモロジー類が最大退化に由来することを使う点が重要となる。

## 背景と問題設定

<p>$X$ をコンパクト既約hyperkähler多様体、$L$ をnef線束とする。第二コホモロジー上のBeauville–Bogomolov–Fujiki形式を $q$ と書く。$q(L)>0$ の場合は既知のbase point free theoremで半豊富性が得られるため、新たな問題は</p>

<div>
$$
L\not\cong\mathcal O_X,\qquad q(L)=0
$$
</div>

<p>という等方的な場合に集中する。半豊富性とは、ある正の整数 $m$ に対して $L^{\otimes m}$ が大域切断で生成されることをいう。</p>

## 主結果

### 主定理1：nef線束の半豊富性（Theorem 1.1）

コンパクト既約hyperkähler多様体上のnef線束は半豊富である。

<p>非自明で $q(L)=0$ の場合、この結論はある正の冪の線形系がLagrangianファイブレーション $X\to B$ を定めるという主張と同値である。したがって、単に線束の切断が非零になることより強く、多様体をファイバーの族として表す構造を得る。</p>

### 主帰結：変形型の有限性（Corollary 1.2）

<p>次元を固定し、$b_2\ge5$ とすると、コンパクトhyperkähler多様体の変形型は有限個である。これは主定理を既存のLagrangianファイブレーションの有限性結果と組み合わせた帰結である。</p>

<p>Introductionでは、Meyerの定理で非零な整数等方類を得て、それを $(1,1)$ 型に保つ非常に一般の変形を選ぶとPicard階数が1になると説明する。符号を選べばその類はnefとなり、主定理からLagrangianファイブレーションへ進める。</p>

## 証明の見取り図

大きな複素構造極限において、LiおよびBlum–Liuによるmetric SYZの結果からspecial Lagrangianトーラスを得る。hyperkähler回転によりそれを正則トーラスへ移し、変形後にLagrangianファイブレーションのファイバーとみなす。そのファイブレーションを元へ変形して、必要な半豊富性を導くという流れである。

高次元ではspecial Lagrangianトーラスを回転すれば必ず正則になるわけではない。Introductionは、そのトーラスが最大退化の消滅サイクルとして現れ、Poincaré双対類が等方ベクトルの冪であるというコホモロジー的情報を使うと説明する。本記事はこの方針と主張を紹介する範囲にとどまり、Section 2以降の回転・退化・変形の証明を独立に検証したものではない。

## 原論文との対応

- **Abstractページ:** [2610.12277](https://arxiv.org/abs/2610.12277)
- **PDF:** [2610.12277v1](https://arxiv.org/pdf/2610.12277v1)
- **Introduction:** Section 1, pp. 1–2（Section 2より前）
- **主要結果:** Theorem 1.1, Corollary 1.2
- **確認バージョン:** 2610.12277v1
- **確認ライセンス:** [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)
- **source_scope:** Abstract and Introduction。後続節の証明全体の精読・独立検証は行っていない。
