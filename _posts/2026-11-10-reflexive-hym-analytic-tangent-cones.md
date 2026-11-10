---
layout: paper
title: Reflexive sheaves, Hermitian-Yang-Mills connections, and tangent cones
title_ja: 反射層の局所代数が決めるHermitian–Yang–Mills接錐
authors: Xuemiao Chen, Song Sun
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AG
arxiv_abstract: In this paper we give a complete algebro-geometric characterization of analytic tangent cones of admissible Hermitian-Yang-Mills connections over any reflexive sheaves.
topic: differential-geometry
tags:
- hermite-einstein-metrics
- vector-bundles-sheaves
- stability
- singularities
arxiv_id: 1912.09561v2
arxiv_url: https://arxiv.org/abs/1912.09561v2
arxiv_submitted: '2019-12-19'
arxiv_updated: '2020-12-19'
summary: 反射層上の許容Hermitian–Yang–Mills接続を特異点へ拡大した極限は一意で、その層の芽だけから決まる。最適代数的接錐の安定性分解が極限接続を与え、曲率の集中を記録するサイクルも代数的な不変量と一致する。
abstract_en: ''
summary_en: Rescaling a singular Hermitian–Yang–Mills connection can a priori produce different limits along different sequences. This work identifies the limit connection and the cycle recording energy concentration using the germ of the underlying reflexive sheaf. Optimal extensions on a blowup supply the algebraic data needed for that identification. The theorem removes the special local models required by earlier results.
abstract_ja: 滑らかなKähler計量を持つ複素球上で、反射層の局所自由部分に許容Hermitian–Yang–Mills接続を考える。原点での解析的接錐の一意性を示し、極限反射層・接続とbubblingのサイクルを、最適代数的接錐から得られる不変量によって特徴付ける。孤立・斉次特異点などの追加条件を除き、一般の反射層を扱う。
abstract_source_url: https://arxiv.org/abs/1912.09561v2
license_name: arXiv.org perpetual, non-exclusive license
license_url: http://arxiv.org/licenses/nonexclusive-distrib/1.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:1912.09561v2](https://arxiv.org/abs/1912.09561v2)
- **著者:** Xuemiao Chen, Song Sun
- **初回投稿日:** 2019-12-19
- **最終更新日:** 2020-12-19
- **主分類・副分類:** math.DG（主分類）; math.AG
- **ライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)

## 要約

接続を特異点の近くで拡大すると、どの方向にどのような特異性が現れるかを表す接錐が得られる。しかし極限を取る際には部分列とゲージ変換を選ぶため、存在が分かっても一意性は自動的には従わない。

本論文は、反射層上の許容Hermitian–Yang–Mills接続について、この解析的接錐が層の芽だけで決まることを示す。極限接続だけでなく、Yang–Millsエネルギーの集中を重複度付きで記録する余次元2のサイクルも代数的なデータと一致する。

従来は孤立した斉次特異点や、局所自由かつ安定な代数的接錐を持つ場合に得られていた結果を、一般の反射層へ拡張する。解析的な特異性を、爆発上の層の拡張と安定性フィルトレーションへ翻訳する点が中心である。

## 背景と問題設定

$B\subset\mathbb C^n$を単位球、$\omega$を滑らかなKähler計量、$\mathcal E$を$B$の近傍で定義された反射的連接層とする。許容HYM接続$A$とは、$\mathcal E$の局所自由部分上のHYM計量のChern接続であり、曲率が各コンパクト部分上で有限の$L^2$ノルムを持つものである。

拡大写像$z\mapsto\lambda z$に対して

$$
A\_\lambda=\lambda^\ast A,\qquad \lambda\longrightarrow0
$$

を考える。適切な部分列とゲージ変換による極限$A\_\infty$は反射層$\mathcal E\_\infty$上のHYM錐接続となる。さらに$\mathbb P^{n-1}$上の解析的blow-up cycle

$$
\Sigma\_b^{\mathrm{an}}=\sum\_k m\_k^{\mathrm{an}}[\Sigma\_b^k]
$$

が曲率の集中を記録する。正整数$m\_k^{\mathrm{an}}$は各成分に横断的なエネルギー集中の重複度である。解析的接錐はこの接続とサイクルの対として扱う。

## 主結果

### 代数的データの作り方

原点の爆発$p:\widehat B\to B$の例外因子$D=\mathbb P^{n-1}$を考える。$p^\ast \mathcal E$を$D$を越えて反射層$\widehat{\mathcal E}$に拡張し、その制限$\underline{\widehat{\mathcal E}}$を代数的接錐と呼ぶ。

この制限のHarder–Narasimhanフィルトレーションを$0=\mathcal E\_0\subset\cdots\subset\mathcal E\_m=\underline{\widehat{\mathcal E}}$と書くと、最適性は

$$
\Phi(\underline{\widehat{\mathcal E}})
=\mu(\mathcal E\_1)-\mu(\mathcal E\_m/\mathcal E\_{m-1})\in[0,1)
$$

で定義される。傾きは$\mathbb P^{n-1}$の標準偏極に関するものである。最適な拡張の存在は著者らの先行研究の結果であり、最適性は半安定性より弱い。

自然な射$\pi:\mathbb C^n\setminus\lbrace 0\rbrace \to\mathbb P^{n-1}$と包含$\psi:\mathbb C^n\setminus\lbrace 0\rbrace \hookrightarrow\mathbb C^n$を使い、Harder–Narasimhan–Seshadri分解から

$$
\mathcal G^{\mathrm{alg}}
=\psi\_\ast \pi^\ast \bigl(\operatorname{Gr}^{\mathrm{HNS}}(\underline{\widehat{\mathcal E}})\bigr)^{\ast \ast }
$$

を定める（式(1.1)）。同時に代数的blow-up cycle $\Sigma\_b^{\mathrm{alg}}$を得る。これらは最適代数的接錐の選択に依存せず、$\mathcal E$の原点での芽の不変量となる。サイクルの詳しい定義は後続節に委ねられており、ここではIntroductionが述べる不変性を用いる。

### 主定理：解析的接錐の完全な特徴付け（Theorem 1.1）

上記の$\mathcal E,A$について、原点での解析的接錐は一意である。極限接続$A\_\infty$は$\mathcal G^{\mathrm{alg}}$上のHYM錐接続とゲージ同値で、特に

$$
\mathcal E\_\infty\simeq\mathcal G^{\mathrm{alg}},\qquad
\operatorname{Sing}(A\_\infty)=\operatorname{Sing}(\mathcal G^{\mathrm{alg}}),\qquad
\Sigma\_b^{\mathrm{an}}=\Sigma\_b^{\mathrm{alg}}
$$

が成り立つ。最後の等式は集合としての一致ではなく、重複度を含むサイクルの一致である。

したがって、接続を拡大する部分列の選択によって異なる局所モデルが生じることはない。しかもこのモデルは元の接続の追加情報によらず、層の芽から決まる。孤立性や斉次性は仮定せず、局所自由な安定代数的接錐の存在も要求しない。

## 証明の見取り図

以前の証明は、良い背景Hermitian計量を明示的に構成して偏微分方程式の評価を行う方法に依存していた。一般の特異性ではその構成が難しくなるため、本論文はより内在的な方針を取る。

新しい入力は、許容HYM接続そのものから最適代数的接錐のすべての同値類を回復できることである。これによって解析と代数の二つの構成を結び付け、さらに射影多様体上の許容HYM接続と半安定層のモジュライのコンパクト化に関する結果を用いて、極限接続とサイクルを同定する。具体的な回復手続きと重複度比較の証明はIntroduction以降に置かれている。

## 原論文との対応

- **Abstractページ:** [公式arXivページ](https://arxiv.org/abs/1912.09561v2)
- **Introduction:** [PDF](https://arxiv.org/pdf/1912.09561v2) — Section 1, pp. 2–4
- **Introduction中で言及された主要結果:** Theorem 1.1; equation (1.1)
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 1912.09561v2
- **確認したライセンス:** [arXiv.org perpetual, non-exclusive license](http://arxiv.org/licenses/nonexclusive-distrib/1.0/)
- **source\_scope:** Abstract and Introduction
