---
layout: paper
title: Superconnections and Bott-Chern valued Riemann-Roch-Grothendieck for complex orbifolds, I
title_ja: 複素orbifoldのBott–Chern値Riemann–Roch–Grothendieck公式
authors: Qiaochu Ma, Xiang Tang, Hsian-Hua Tseng, Zhaoting Wei
arxiv_primary_category: math.DG
arxiv_categories:
- math.DG
- math.AG
arxiv_abstract: We use flat antiholomorphic superconnections to study orbifold Chern character following the method introduced by Bismut, Shen, and Wei on general complex orbifolds. We show the uniqueness of orbifold Chern character by proving a Riemann-Roch-Grothendieck theorem for orbifold embeddings.
topic: differential-geometry
tags:
- chern-classes
- vector-bundles-sheaves
- complex-analytic-spaces
- hodge-theory
arxiv_id: 2505.13912v3
arxiv_url: https://arxiv.org/abs/2505.13912
arxiv_submitted: '2025-05-20'
arxiv_updated: '2026-10-20'
summary: 一般のコンパクト複素orbifoldの連接解析複体にBott–Chern値Chern指標を構成し、埋め込みに対するRiemann–Roch–Grothendieck公式を示す。大域的な局所自由分解を仮定せず、固定群が変化する埋め込みも扱う。
abstract_en: We use flat antiholomorphic superconnections to study orbifold Chern character following the method introduced by Bismut, Shen, and Wei on general complex orbifolds. We show the uniqueness of orbifold Chern character by proving a Riemann-Roch-Grothendieck theorem for orbifold embeddings.
summary_en: ''
abstract_ja: 平坦な反正則superconnectionを用い、コンパクト複素orbifoldの連接解析複体に対するorbifold Chern指標を構成する。値域はinertia orbifoldのBott–Chernコホモロジーであり、表示の選択に依存しない。埋め込みの直像に関するRiemann–Roch–Grothendieck公式を証明し、既存のベクトル束上の指標との一致、引き戻し、埋め込み公式によって構成が一意に決まることを示す。
abstract_source_url: https://arxiv.org/abs/2505.13912
license_name: Creative Commons Attribution 4.0 International (CC BY 4.0)
license_url: http://creativecommons.org/licenses/by/4.0/
article_mode: Abstract・Introductionに基づく日本語要約
source_scope: Abstract and Introduction
published: true
---

## 書誌情報

- **arXiv:** [arXiv:2505.13912v3](https://arxiv.org/abs/2505.13912)
- **著者:** Qiaochu Ma, Xiang Tang, Hsian-Hua Tseng, Zhaoting Wei
- **初回投稿日:** 2025-05-20
- **最終更新日:** 2026-10-20
- **主分類・副分類:** math.DG（主分類）; math.AG
- **ライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)

## 要約

Riemann–Roch公式にはEuler標数という数を求める側面と、写像による直像を特性類の等式として記述する側面がある。本論文は後者を、必ずしもKählerでも大域商でもないコンパクト複素orbifoldへ拡張する。対象は正則ベクトル束だけでなく連接解析複体である。

難しさは、連接層が大域的な有限局所自由分解を持つとは限らないことと、orbifoldの各点の固定群が表現論的情報を持つことにある。著者らは平坦反正則superconnectionで前者を、inertia orbifold上の類で後者を扱う。さらにBott–Chernコホモロジーを用いて、非Kähler幾何で失われやすい情報を保持する。

中心となるのは埋め込みに関する直像公式と、その公式などによるChern指標の一意性である。直像に有限局所自由分解がなくても成立し、埋め込みで固定群が増える場合も含む。ただし一般の固有正則写像に対する公式全体は今後の課題であり、本論文で確立する写像の範囲は埋め込みである。

## 背景と問題設定

Bott–Chernコホモロジーは、純粋な型の閉形式を$\partial\bar\partial$完全形式で割った

$$
H\_{BC}^{p,q}(X)=\frac{\lbrace \alpha\in\Omega^{p,q}(X):d\alpha=0\rbrace }{\partial\bar\partial\Omega^{p-1,q-1}(X)}
$$

である。計量を変えたときの特性形式の差が分母に入るため、計量に依存しない類を定められる。非Kählerの場合にはDolbeault類より細かい情報を持ち得る。

一方、inertia orbifold$IX$は点とその固定群の元の組を記録する。局所商$[U/G]$では

$$
I[U/G]=\coprod\_{(g)\subset G}[U^g/Z\_G(g)]
$$

となる。Bott–Chernを使う理由とinertiaを使う理由は異なり、前者が複素解析的な型と計量変分、後者が固定群の指標を担う。

連接解析層のGrothendieck群$K(X)$から

$$
\operatorname{ch}\_{BC}:K(X)\longrightarrow H\_{BC}^{(=)}(IX,\mathbb C),\qquad H\_{BC}^{(=)}=\bigoplus\_p H\_{BC}^{p,p}
$$

への準同型を構成する。これはorbifoldのgroupoid表示を変えるMorita同値に対して不変であり、正則orbifoldベクトル束ではMaの既存の指標に一致する。

## 主結果

### 埋め込みに対する直像公式（Theorem 1.1）

コンパクト複素orbifold groupoidの埋め込み$i:X\hookrightarrow Y$と$F\in D^b\_{\mathrm{coh}}(X)$について

$$
\operatorname{ch}\_{BC}(i\_*F)=Ii\_*\left(\operatorname{ch}\_{BC}(F)\operatorname{Td}\_{BC}(N\_{X/Y})^{-1}\right)
$$

が$H\_{BC}^{(=)}(IY,\mathbb C)$で成立する。$Ii:IX\to IY$は誘導された写像であり、Todd因子は法束の固定群固有束分解を用いてsectorごとに定める。

これは積分後の数の一致ではなく、対象側に残る特性類の等式である。$i\_*F$が有限局所自由分解を持つことを要求せず、固定群を変える埋め込みでは表現の誘導に由来する情報もinertia上の押し出しに含める。

### Chern指標の一意性（Theorem 1.2）

正則orbifoldベクトル束上でMaの指標と一致し、引き戻しに関して関手的で、Theorem 1.1の埋め込み公式を満たす群準同型は一意である。従ってsuperconnectionを用いた構成は、任意の拡張方法の一例にとどまらず、自然な整合条件によって特徴づけられる。

## 証明の見取り図

平坦反正則superconnectionのホモトピー圏と$D^b\_{\mathrm{coh}}(X)$を同値にし、一般化Hermitian計量から曲率を作る。inertiaへの引き戻しと固定群作用を挿入したsupertraceが閉形式を与え、計量変分の$\partial\bar\partial$完全性と写像錐での加法性により、Chern指標が導来圏へ降りる。

埋め込みは、局所空間を変えず固定群だけを変える段階と、固定群を保つ段階に分解する。前者は有限群表現の誘導に関する指標等式、後者は法錐への変形と零切断のKoszul複体による逆Todd類で処理する。一意性にはHironakaの平坦化とG理論のdévissageを用い、局所自由部分と低次元の台を持つ部分に分ける。

Introductionは、一般の固有写像をグラフ埋め込みと射影に分解する展望も示す。射影の扱いにはorbifold Dolbeault作用素の族の定理が別途必要であり、その部分まで証明したとは述べていない。

## 原論文との対応

- **Abstractページ:** [Superconnections and Bott-Chern valued Riemann-Roch-Grothendieck for complex orbifolds, I](https://arxiv.org/abs/2505.13912)
- **Introduction:** [PDF](https://arxiv.org/pdf/2505.13912v3) — Section 1, pp. 1–6（Section 2直前まで）。
- **Introduction中で言及された主要結果:** Theorems 1.1, 1.2、Introductionの式(1.4)–(1.6)。
- **論文構成・証明方針:** 上記Introductionで述べられた範囲に基づく。後続節の証明全体の検証は行っていない。
- **確認したarXivバージョン:** 2505.13912v3
- **確認したライセンス:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/)
- **source\_scope:** Abstract and Introduction
